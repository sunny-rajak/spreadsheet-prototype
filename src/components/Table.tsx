import React from "react";
import {
    FiFileText,
    FiCalendar,
    FiInfo,
    FiUser,
    FiLink,
    FiUsers,
    FiFlag,
    FiClock,
    FiDollarSign,
} from "react-icons/fi";
import { IoAdd } from "react-icons/io5";
import {
    useReactTable,
    getCoreRowModel,
    flexRender,
} from "@tanstack/react-table";
import type { ColumnDef } from "@tanstack/react-table";

type Person = {
    jobRequest: string;
    submitted: string;
    status: string;
    submitter: string;
    url: string;
    assigned: string;
    priority: string;
    dueDate: string;
    estValue: string;
};

const headerIcons: Record<string, React.ElementType> = {
    jobRequest: FiFileText,
    submitted: FiCalendar,
    status: FiInfo,
    submitter: FiUser,
    url: FiLink,
    assigned: FiUsers,
    priority: FiFlag,
    dueDate: FiClock,
    estValue: FiDollarSign,
};

const data: Person[] = [
    {
        jobRequest: "Launch social media campaign for PR",
        submitted: "15-11-2024",
        submitter: "Aisha Patel",
        status: "In-process",
        url: "www.aishapatel.com",
        assigned: "Sophie Choudhury",
        priority: "Medium",
        dueDate: "20-11-2024",
        estValue: "₹6,200,000",
    },
    {
        jobRequest: "Update press kit for company redesign",
        submitted: "28-10-2024",
        submitter: "Irfan Khan",
        status: "Need to start",
        url: "www.irfankhan.com",
        assigned: "Tejas Pandey",
        priority: "High",
        dueDate: "30-10-2024",
        estValue: "₹3,500,000",
    },
    {
        jobRequest: "Finalize user testing feedback for app",
        submitted: "05-12-2024",
        submitter: "Mark Johnson",
        status: "In-process",
        url: "www.markjohn.com",
        assigned: "Rachel Lee",
        priority: "Medium",
        dueDate: "10-12-2024",
        estValue: "₹4,750,000",
    },
    {
        jobRequest: "Design new features for the website",
        submitted: "10-01-2025",
        submitter: "Emily Green",
        status: "Complete",
        url: "www.emilygree.com",
        assigned: "Tom Wright",
        priority: "Low",
        dueDate: "15-01-2025",
        estValue: "₹5,900,000",
    },
    {
        jobRequest: "Prepare financial report for Q4",
        submitted: "25-01-2025",
        submitter: "Jessica Brown",
        status: "Blocked",
        url: "www.jessicabr.com",
        assigned: "Kevin Smith",
        priority: "Low",
        dueDate: "30-01-2025",
        estValue: "₹2,800,000",
    },
    {
        jobRequest: "Q3 Financial Overview",
        submitted: "01-09-2024",
        submitter: "John Doe",
        status: "Submitted",
        url: "www.johndoe.com",
        assigned: "Sophie Choudhury",
        priority: "High",
        dueDate: "15-09-2024",
        estValue: "₹7,200,000",
    },

    // Add more rows here as needed
];

const columns: ColumnDef<Person>[] = [
    { accessorKey: "jobRequest", header: "Job Request" },
    { accessorKey: "submitted", header: "Submitted" },
    { accessorKey: "status", header: "Status" },
    { accessorKey: "submitter", header: "Submitter" },
    { accessorKey: "url", header: "URL" },
    { accessorKey: "assigned", header: "Assigned" },
    { accessorKey: "priority", header: "Priority" },
    { accessorKey: "dueDate", header: "Due Date" },
    { accessorKey: "estValue", header: "Est. Value" },
    {
        id: "empty",
        header: "",
        cell: () => null,
    },
];

export default function Table() {
    const [selectedRowId, setSelectedRowId] = React.useState<string | null>(
        null
    );

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div className="overflow-x-auto border border-gray-300 rounded">
            <table className="min-w-full border-collapse text-sm font-normal">
                <thead className="bg-gray-100">
                    {/* Custom top row */}
                    <tr>
                        <th
                            colSpan={4}
                            className="px-2 text-left font-semibold text-gray-800 border border-gray-300 bg-[#e3e3e3]"
                        >
                            <span className="px-2 py-1 rounded-lg bg-gray-100">
                                Q3 Financial Overview
                            </span>
                        </th>
                        <th
                            colSpan={1}
                            className="bg-white border border-gray-300"
                        ></th>
                        <th
                            colSpan={1}
                            className="px-2 py-2 text-center font-medium text-[#505450] border border-gray-300 bg-[#d1ded3]"
                        >
                            ABC
                        </th>
                        <th
                            colSpan={2}
                            className="px-2 py-2 text-center font-medium text-[#463e59] border border-gray-300 bg-[#d9cdfa]"
                        >
                            Answer a question
                        </th>
                        <th
                            colSpan={1}
                            className="px-2 py-2 text-center font-medium text-[#695049] border border-gray-300 bg-[#fac2af]"
                        >
                            Extract
                        </th>
                        <th
                            colSpan={1}
                            className="min-w-30 px-2 py-2 text-[#695049] border border-gray-300 bg-[#fac2af]"
                        >
                            <div
                                className="flex items-center justify-center"
                                onClick={() => console.log("Add new row")}
                            >
                                <IoAdd className="w-6 h-6" />
                            </div>
                        </th>
                    </tr>

                    {/* Standard column headers */}
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th
                                    key={header.id}
                                    className={`px-2 py-2 border border-gray-300 font-medium text-left ${
                                        header.column.id === "assigned"
                                            ? "bg-[#e9f0e9] text-[#666b66]"
                                            : ["priority", "dueDate"].includes(
                                                  header.column.id
                                              )
                                            ? "bg-[#e8e1fa] text-[#49405c]"
                                            : header.column.id === "estValue"
                                            ? "bg-[#ffe7de] text-[#997970]"
                                            : "bg-[#ededed] text-gray-600"
                                    } ${
                                        header.column.id === "jobRequest"
                                            ? "max-w-[200px]"
                                            : ""
                                    }`}
                                >
                                    {header.isPlaceholder ? null : (
                                        <div className="flex items-center gap-1">
                                            {headerIcons[header.column.id]
                                                ? React.createElement(
                                                      headerIcons[
                                                          header.column.id
                                                      ],
                                                      {
                                                          className:
                                                              "w-4 h-4 mr-1",
                                                      }
                                                  )
                                                : null}
                                            {flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                        </div>
                                    )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>

                <tbody className="bg-white divide-y divide-gray-200">
                    {table.getRowModel().rows.map((row) => (
                        <tr
                            key={row.id}
                            onClick={() => setSelectedRowId(row.id)}
                            className={`cursor-pointer transition-colors duration-150 ${
                                selectedRowId === row.id
                                    ? "bg-blue-100"
                                    : "hover:bg-blue-50"
                            }`}
                        >
                            {row.getVisibleCells().map((cell) => (
                                <td
                                    key={cell.id}
                                    className={`px-2 py-2 border border-gray-200 ${
                                        cell.column.id === "jobRequest"
                                            ? "max-w-[170px] whitespace-nowrap overflow-hidden text-ellipsis"
                                            : cell.column.id === "url"
                                            ? "max-w-[120px] whitespace-nowrap overflow-hidden text-ellipsis underline underline-offset-2 decoration-2 decoration-gray-400 hover:text-blue-600"
                                            : ""
                                    } ${
                                        ["status", "priority"].includes(
                                            cell.column.id
                                        )
                                            ? "text-center"
                                            : [
                                                  "submitted",
                                                  "dueDate",
                                                  "estValue",
                                              ].includes(cell.column.id)
                                            ? "text-right"
                                            : ""
                                    }`}
                                >
                                    {cell.column.id === "status" ? (
                                        <span
                                            className={
                                                {
                                                    "In-process":
                                                        "text-blue-600 font-medium px-2 py-1 rounded-2xl bg-blue-100",
                                                    "Need to start":
                                                        "text-gray-500 font-medium px-2 py-1 rounded-2xl bg-gray-100",
                                                    Complete:
                                                        "text-green-600 font-medium px-2 py-1 rounded-2xl bg-green-100",
                                                    Blocked:
                                                        "text-red-600 font-medium px-2 py-1 rounded-2xl bg-red-100",
                                                    Submitted:
                                                        "text-purple-600 font-medium px-2 py-1 rounded-2xl bg-purple    -100",
                                                }[cell.getValue() as string] ||
                                                "text-gray-700"
                                            }
                                        >
                                            {cell.getValue() as string}
                                        </span>
                                    ) : cell.column.id === "priority" ? (
                                        <span
                                            className={
                                                {
                                                    High: "text-red-600 font-medium",
                                                    Medium: "text-yellow-500 font-medium",
                                                    Low: "text-blue-500 font-medium",
                                                }[cell.getValue() as string] ||
                                                "text-gray-700"
                                            }
                                        >
                                            {cell.getValue() as string}
                                        </span>
                                    ) : (
                                        flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
