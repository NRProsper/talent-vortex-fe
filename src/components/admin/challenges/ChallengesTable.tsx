"use client";

import type React from "react";
import { useState } from "react";
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useDeleteChallenge, useGetChallenges } from "@/hooks/useChallengeHooks";
import AddChallengeModal from "./AddChallengeModal";
import EditChallengeModal from "./EditChallengeModal";
import ViewChallengeModal from "./ViewChallengeModal";
import { type Challenge, ChallengeStatus, ChallengeSortField, SortOrder, type QueryChallengeRequest } from "@/types";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import LoadingSpinner from "@/components/global/LoadingSpinner";

export default function ChallengesTable() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingChallenge, setEditingChallenge] = useState<Challenge | null>(null);
  const [viewingChallenge, setViewingChallenge] = useState<Challenge | null>(null);
  const [queryParams, setQueryParams] = useState<QueryChallengeRequest>({
    page: 1,
    limit: 10,
    sortField: ChallengeSortField.CREATED_AT,
    sortOrder: SortOrder.DESC,
  });

  const { data: challengesData, isLoading, isError } = useGetChallenges(queryParams);
  const deleteChallenge = useDeleteChallenge();

  const columns: ColumnDef<Challenge>[] = [
    {
      accessorKey: "title",
      header: ({ column }) => {
        return (
          <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            Title
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => <div>{row.getValue("title")}</div>,
    },
    {
      accessorKey: "startDate",
      header: ({ column }) => {
        return (
          <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            Start Date
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => <div>{new Date(row.getValue("startDate")).toLocaleDateString()}</div>,
    },
    {
      accessorKey: "endDate",
      header: ({ column }) => {
        return (
          <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            End Date
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => <div>{new Date(row.getValue("endDate")).toLocaleDateString()}</div>,
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => <div>{row.getValue("status")}</div>,
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const challenge = row.original;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem onClick={() => setViewingChallenge(challenge)}>View</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setEditingChallenge(challenge)}>Edit</DropdownMenuItem>
              <DropdownMenuItem onClick={() => deleteChallenge.mutate(challenge._id)}>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  const table = useReactTable({
    data: challengesData?.challenges || [],
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQueryParams((prev) => ({ ...prev, search: event.target.value }));
  };

  const handleStatusFilter = (status: ChallengeStatus) => {
    setQueryParams((prev) => ({ ...prev, status }));
  };

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <div>Error fetching challenges</div>;

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Search challenges..."
          value={queryParams.search || ""}
          onChange={handleSearch}
          className="max-w-sm"
        />
        <Select onValueChange={(value: ChallengeStatus) => handleStatusFilter(value)}>
          <SelectTrigger className="w-[180px] ml-4">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            {Object.values(ChallengeStatus).map((status) => (
              <SelectItem key={status} value={status}>
                {status}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button onClick={() => setIsAddModalOpen(true)} className="ml-auto">
          <Plus className="mr-2 h-4 w-4" /> Add Challenge
        </Button>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {challengesData?.pagination.totalItems} total challenges
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setQueryParams((prev) => ({ ...prev, page: prev.page! - 1 }))}
            disabled={queryParams.page === 1}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setQueryParams((prev) => ({ ...prev, page: prev.page! + 1 }))}
            disabled={queryParams.page! * queryParams.limit! >= (challengesData?.pagination.totalItems ?? 0)}
          >
            Next
          </Button>
        </div>
      </div>
      <AddChallengeModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
      {editingChallenge && (
        <EditChallengeModal
          challenge={editingChallenge}
          isOpen={!!editingChallenge}
          onClose={() => setEditingChallenge(null)}
        />
      )}
      {viewingChallenge && (
        <ViewChallengeModal
          challengeId={viewingChallenge._id}
          isOpen={!!viewingChallenge}
          onClose={() => setViewingChallenge(null)}
        />
      )}
    </div>
  );
}

