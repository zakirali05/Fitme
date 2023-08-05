import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  import {Check,X } from "lucide-react"

export const TableComponent = ()=>{
    return (
   <div id="packages" className="flex flex-col items-center justify-center my-12 p-12 gap-10">
    <h1 className="text-center text-2xl font-semibold">Yearly <span className="text-[rebeccapurple]">Packages</span>
    <p className="text-sm font-light text-muted-foreground underline md:hidden py-3">Scroll left</p>
      </h1>
    <div className="w-[95%] md:w-[80%] lg:w-[60%]">
         <Table >
  <TableCaption>Choose a plan according to your need.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Package</TableHead>
      <TableHead>All equipments</TableHead>
      <TableHead>Air conditioner</TableHead>
      <TableHead>Hours</TableHead>
      <TableHead>Spa</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">Basic</TableCell>
      <TableCell><X/></TableCell>
      <TableCell><X/></TableCell>
      <TableCell>5 hrs</TableCell>
      <TableCell><X/></TableCell>
      <TableCell className="text-right">$50.00</TableCell>
    </TableRow>

    <TableRow>
      <TableCell className="font-medium">Standard</TableCell>
      <TableCell><X/></TableCell>
      <TableCell><Check/></TableCell>
      <TableCell>5 hrs</TableCell>
      <TableCell><X/></TableCell>
      <TableCell className="text-right">$75.00</TableCell>
    </TableRow>

    <TableRow>
      <TableCell className="font-medium">Premium</TableCell>
      <TableCell><Check/></TableCell>
      <TableCell><Check/></TableCell>
      <TableCell>8 hrs</TableCell>
      <TableCell><X/></TableCell>
      <TableCell className="text-right">$200.00</TableCell>
    </TableRow>

    <TableRow>
      <TableCell className="font-medium">Luxurius</TableCell>
      <TableCell><Check/></TableCell>
      <TableCell><Check/></TableCell>
      <TableCell>24 hrs</TableCell>
      <TableCell><Check/></TableCell>
      <TableCell className="text-right">$700.00</TableCell>
    </TableRow>
  </TableBody>
</Table>
</div>
   </div>

    )
}