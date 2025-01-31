"use client";

import { useState } from "react";
import { ChallengeCard } from "@/components/global/ChallengeCard";
import { useGetChallenges } from "@/hooks/useChallengeHooks";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import type { Challenge, QueryChallengeRequest } from "@/types";
import LoadingSpinner from "@/components/global/LoadingSpinner";

const ITEMS_PER_PAGE = 10;

export default function ChallengesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [queryParams, setQueryParams] = useState<QueryChallengeRequest>({
    page: currentPage,
    limit: ITEMS_PER_PAGE,
  });

  const { data, isLoading, isError } = useGetChallenges(queryParams);

  const challenges = data?.challenges || [];
  const totalPages = data?.pagination?.totalPages || 1;

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    setQueryParams({ ...queryParams, page: newPage });
  };

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <div>Error loading challenges</div>;

  return (
    <div className="container px-4 md:px-8 lg:px-20 py-9 md:py-20 max-w-[1920px] mx-auto">
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Go Back</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Challenges & Hackathons</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {challenges.map((challenge: Challenge) => (
          <ChallengeCard key={challenge._id} challenge={challenge} />
        ))}
      </div>

      <Pagination className="justify-center">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (currentPage > 1) handlePageChange(currentPage - 1);
              }}
            />
          </PaginationItem>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <PaginationItem key={number}>
              <PaginationLink
                href="#"
                isActive={currentPage === number}
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(number);
                }}
              >
                {number}
              </PaginationLink>
            </PaginationItem>
          ))}

          {totalPages > 5 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (currentPage < totalPages) handlePageChange(currentPage + 1);
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

