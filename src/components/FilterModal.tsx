import React, { useState } from "react"
import { format } from "date-fns"
import { ChevronDown, ChevronUp } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog"
import { Button } from "./ui/button"
import { Checkbox } from "./ui/checkbox"
import { Calendar } from "./ui/calendar"
import { cn } from "../lib/utils"

type DateRange = {
  from: Date
  to: Date
}

type FilterState = {
  dateRange: DateRange
  transactionTypes: string[]
  transactionStatus: string[]
}

type FilterModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  onApply: (filters: FilterState) => void
}

const QUICK_FILTERS = ["Today", "Last 7 days", "This month", "Last 3 months"]

const TRANSACTION_TYPES = [
  "Store Transactions",
  "Get Tipped",
  "Withdrawals",
  "Chargebacks",
  "Cashbacks",
  "Refer & Earn",
]

const TRANSACTION_STATUS = ["Successful", "Pending", "Failed"]

export function FilterModal({ open, onOpenChange, onApply }: FilterModalProps) {
  const [showStartCalendar, setShowStartCalendar] = useState(false)
  const [showEndCalendar, setShowEndCalendar] = useState(false)
  const [showTransactionTypes, setShowTransactionTypes] = useState(false)
  const [showTransactionStatus, setShowTransactionStatus] = useState(false)

  const [dateRange, setDateRange] = useState<DateRange>({
    from: new Date(2023, 6, 17),
    to: new Date(2023, 7, 17),
  })

  const [selectedTypes, setSelectedTypes] = useState<string[]>(TRANSACTION_TYPES)
  const [selectedStatus, setSelectedStatus] = useState<string[]>(TRANSACTION_STATUS)

  const handleClear = () => {
    setDateRange({
      from: new Date(2023, 6, 17),
      to: new Date(2023, 7, 17),
    })
    setSelectedTypes([])
    setSelectedStatus([])
  }

  const handleApply = () => {
    onApply({
      dateRange,
      transactionTypes: selectedTypes,
      transactionStatus: selectedStatus,
    })
    onOpenChange(false)
  }

  const toggleType = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type)
        ? prev.filter((t) => t !== type)
        : [...prev, type]
    )
  }

  const toggleStatus = (status: string) => {
    setSelectedStatus((prev) =>
      prev.includes(status)
        ? prev.filter((s) => s !== status)
        : [...prev, status]
    )
  }

  const isApplyEnabled = selectedTypes.length > 0 || selectedStatus.length > 0

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[465px] p-0 gap-0">
        <DialogHeader className="px-6 pt-6 pb-4">
          <DialogTitle className="text-2xl font-bold">Filter</DialogTitle>
        </DialogHeader>

        <div className="px-6 pb-6 space-y-6">
          <div className="flex gap-2">
            {QUICK_FILTERS.map((filter) => (
              <button
                key={filter}
                className="px-4 py-2 text-sm rounded-full border border-slate-200 hover:bg-slate-50 transition-colors"
              >
                {filter}
              </button>
            ))}
          </div>

          <div>
            <label className="text-sm font-medium mb-3 block">Date Range</label>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative">
                <button
                  onClick={() => {
                    setShowStartCalendar(!showStartCalendar)
                    setShowEndCalendar(false)
                  }}
                  className={cn(
                    "w-full px-4 py-2.5 text-left text-sm rounded-lg border transition-colors flex items-center justify-between",
                    showStartCalendar
                      ? "border-slate-900 bg-white"
                      : "border-slate-200 bg-slate-50"
                  )}
                >
                  {format(dateRange.from, "dd MMM yyyy")}
                  <ChevronUp className={cn("h-4 w-4 transition-transform", !showStartCalendar && "rotate-180")} />
                </button>
                {showStartCalendar && (
                  <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-slate-200 z-10">
                    <Calendar
                      mode="single"
                      selected={dateRange.from}
                      onSelect={(date) => {
                        if (date) {
                          setDateRange({ ...dateRange, from: date })
                          setShowStartCalendar(false)
                        }
                      }}
                    />
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  onClick={() => {
                    setShowEndCalendar(!showEndCalendar)
                    setShowStartCalendar(false)
                  }}
                  className="w-full px-4 py-2.5 text-left text-sm rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-colors flex items-center justify-between"
                >
                  {format(dateRange.to, "dd MMM yyyy")}
                  <ChevronDown className="h-4 w-4" />
                </button>
                {showEndCalendar && (
                  <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-slate-200 z-10">
                    <Calendar
                      mode="single"
                      selected={dateRange.to}
                      onSelect={(date) => {
                        if (date) {
                          setDateRange({ ...dateRange, to: date })
                          setShowEndCalendar(false)
                        }
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-3 block">Transaction Type</label>
            <div className="relative">
              <button
                onClick={() => {
                  setShowTransactionTypes(!showTransactionTypes)
                  setShowTransactionStatus(false)
                }}
                className={cn(
                  "w-full px-4 py-2.5 text-left text-sm rounded-lg border transition-colors flex items-center justify-between",
                  showTransactionTypes
                    ? "border-slate-900 bg-white"
                    : "border-slate-200 bg-slate-50"
                )}
              >
                <span className="truncate w-full">
                  {selectedTypes.length === 0
                    ? "Select transaction types"
                    : selectedTypes.join(", ")}
                </span>
                <ChevronDown className={cn("h-4 w-4 flex-shrink-0 transition-transform", showTransactionTypes && "rotate-180")} />
              </button>

              {showTransactionTypes && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-slate-200 z-10 p-4 space-y-3">
                  {TRANSACTION_TYPES.map((type) => (
                    <div key={type} className="flex items-center space-x-3">
                      <Checkbox
                        id={type}
                        checked={selectedTypes.includes(type)}
                        onCheckedChange={() => toggleType(type)}
                      />
                      <label
                        htmlFor={type}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                      >
                        {type}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-3 block">Transaction Status</label>
            <div className="relative">
              <button
                onClick={() => {
                  setShowTransactionStatus(!showTransactionStatus)
                  setShowTransactionTypes(false)
                }}
                className="w-full px-4 py-2.5 text-left text-sm rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-colors flex items-center justify-between"
              >
                <span className="truncate">
                  {selectedStatus.length === 0
                    ? "Select transaction status"
                    : selectedStatus.join(", ")}
                </span>
                <ChevronDown className={cn("h-4 w-4 flex-shrink-0 transition-transform", showTransactionStatus && "rotate-180")} />
              </button>

              {showTransactionStatus && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-slate-200 z-10 p-4 space-y-3">
                  {TRANSACTION_STATUS.map((status) => (
                    <div key={status} className="flex items-center space-x-3">
                      <Checkbox
                        id={status}
                        checked={selectedStatus.includes(status)}
                        onCheckedChange={() => toggleStatus(status)}
                      />
                      <label
                        htmlFor={status}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                      >
                        {status}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex gap-3 px-6 pb-6 pt-2">
          <Button
            variant="outline"
            onClick={handleClear}
            className="flex-1 border-slate-200"
          >
            Clear
          </Button>
          <Button
            onClick={handleApply}
            disabled={!isApplyEnabled}
            className={cn(
              "flex-1",
              isApplyEnabled
                ? "bg-slate-900 hover:bg-slate-800"
                : "bg-slate-200 text-slate-400"
            )}
          >
            Apply
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
