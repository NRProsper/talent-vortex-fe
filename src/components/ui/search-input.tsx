import * as React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Search } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  SearchIcon?: React.ComponentType<{ className?: string; }>;
  SubmitIcon?: React.ComponentType<{ className?: string; }>;
}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ className, label, SearchIcon = Search, SubmitIcon = ArrowRight, id, className: inputClassName, ...props }, ref) => {
    const inputId = React.useId();

    return (
      <div className={cn("space-y-2", className)}>
        {label && <Label htmlFor={inputId}>{label}</Label>}
        <div className="relative">
          <Input id={inputId} className={cn("peer pe-9 ps-9", inputClassName)} type="search" ref={ref} {...props} />
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
            <SearchIcon className="size-4" />
          </div>
          <button
            className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Submit search"
            type="submit"
          >
            <SubmitIcon className="size-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    );
  },
);

SearchInput.displayName = "SearchInput";

export { SearchInput }

