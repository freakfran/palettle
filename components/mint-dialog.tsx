'use client'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {useAccount, useWaitForTransactionReceipt, useWriteContract} from "wagmi";
import {z} from "zod";
import {pinata} from "@/utils/config";
import {paletteContractConfig} from "@/utils/pattle";
import {Artwork} from "@/types";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {formatDate} from "@/utils/common";
import {useRequest} from "ahooks";
import {useEffect} from "react";
import {getUserByAddress} from "@/backend/actions/users";
import {hexToNumber} from "viem";
import {updateArtworkId} from "@/backend/actions/token";

interface MintDialogProps {
    className?: string,
    artwork: Artwork,
}

const mintSchema = z.object({
    amount: z.coerce.number().positive()
})

export default function MintDialog({className, artwork}: MintDialogProps) {
    const {address} = useAccount();
    const {
        data: hash,
        isPending,
        error,
        writeContract
    } = useWriteContract();

    const {
        data: receipt,
        isLoading: isConfirming,
        isSuccess: isConfirmed
    } = useWaitForTransactionReceipt({
        hash,
    });

    const form = useForm<z.infer<typeof mintSchema>>({
        resolver: zodResolver(mintSchema),
    })

    const mintNft = async (amount: number) => {
        if (!artwork.artworkId) {
            const user = await getUserByAddress(address!)
            const keyRequest = await fetch("/api/key");
            const keyData = await keyRequest.json();
            const upload = await pinata.upload.json({
                name: artwork.title,
                description: artwork.description,
                image: artwork.url,
                attribution: [
                    {
                        author: user?.nickname,
                        authorAddress: artwork.authorAddress,
                        createTime: formatDate(artwork.createdAt),
                    }
                ]
            }).key(keyData.JWT);
            const ipfsUrl = await pinata.gateways.convert(upload.IpfsHash);
            writeContract({
                ...paletteContractConfig,
                functionName: 'mintNewArtworks',
                args: [BigInt(amount), ipfsUrl],
            })
        } else {
            writeContract({
                ...paletteContractConfig,
                functionName: 'addNftToArtwork',
                args: [BigInt(artwork.artworkId), BigInt(amount)],
            })
        }
    };

    const {
        run: runMint,
        loading: loadingMint,
        error: errorMint
    } = useRequest(mintNft, {manual: true})

    const {
        run: runUpdate,
        loading: loadingUpdate,
        error: errorUpdate
    } = useRequest(updateArtworkId, {manual: true})

    useEffect(() => {
        if (receipt && receipt.logs.length > 0 && !artwork.artworkId) {
            const eventEmitted = receipt.logs[1];
            const artworkId = hexToNumber(eventEmitted.topics[1]!);
            runUpdate(artwork.id, String(artworkId))
        }
    }, [artwork.artworkId, artwork.id, receipt, runUpdate]);



    function onSubmit(values: z.infer<typeof mintSchema>) {
        runMint(values.amount);
    }


    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="destructive" className={className}>Mint</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Mint NFT</DialogTitle>
                    <DialogDescription>
                        Mint your NFT and share it with the world.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="amount"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel className="font-bold">Amount</FormLabel>
                                    <FormControl>
                                        <Input type="number" {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <DialogFooter>
                            {
                                error ?
                                    <p className="text-red-500 text-sm">{error.message}</p> : errorMint ?
                                        <p className="text-red-500 text-sm">{errorMint.message}</p> : errorUpdate ?
                                            <p className="text-red-500 text-sm">{errorUpdate.message}</p> : isConfirmed ?
                                                <p className="text-green-500 text-sm">Minted successfully!</p> : null
                            }
                            <Button type="submit"
                                    disabled={loadingMint || isPending || isConfirming}>
                                {
                                    isConfirming ?
                                        'Confirming...' :
                                        loadingMint || isPending ? 'Minting...'
                                            : loadingUpdate ? 'Updating...' : 'Mint'
                                }
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}