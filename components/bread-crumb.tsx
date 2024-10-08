export default function Breadcrumb() {
    return (
      <div className="relative">
        <nav aria-label="box-border">
          <ol className="shadow-[0_3px_10px_0px_rgba(24,59,86,0.13)] 
          bg-[#fff] p-4 w-fit flex flex-wrap rounded-full text-sm">
            <li className="breadcrumb-item">
              <a
                href="index1.html"
                className="text-[#6c757d] list-item text-center"
              >
                Home{" "}
              </a>
            </li>
            <li className="text-[#ee574c] pl-4">Items Details</li>
          </ol>
        </nav>
      </div>
    );
  }