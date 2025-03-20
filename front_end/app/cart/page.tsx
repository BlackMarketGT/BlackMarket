import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Checkbox } from "@/components/ui/checkbox"
  import { Label } from "@/components/ui/label"
  import { Input } from "@/components/ui/input"
  import { Button } from "@/components/ui/button"
  export function LabelDemo() {
    return (
      <div>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
      </div>
    )
  }
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

  
import "./pages.css";
import {NavigationBar} from "../components/NavigationBar";



export default function cart() {
    return (
      <>
        <div className="fixed top-0 w-full flex justify-center items-center pt-4 z-10">
          <NavigationBar />
         </div>

        <p className="relative text-4xl top-20 font-bold left-10">Checkout</p>

        <div className="relative size-32">
            <Card className="relative top-20 left-10 w-[500px] h-[570px]">
                <div className = "grid grid-cols-2 gap-4 px-4 py-4">

                <div className ="relative col-span-1 left-5 top-5 ">
                  <Label>First Name</Label>
                  <Input id ="Name" placeholder="Mark" className="col-span-1 w-7xl"></Input>
                </div>

                <div className ="relative col-span-1 left-5 top-5">
                  <Label>Last Name</Label>
                  <Input id ="Name" placeholder="Andrews" className="col-span-1 w-7xl"></Input>
                </div>

                <div className ="relative col-span-2 left-5 top-10">
                  <Label>Email</Label>
                  <Input id ="Email" placeholder="mark@example.com" className="w-7xl"></Input>
                </div>

                <div className ="relative col-span-2 left-5 top-10">
                <Label>Address</Label>
                <Input id ="Address" placeholder="123 Main St" className="w-7xl"></Input>
                </div>

                <div className ="relative col-span-2 left-5 top-10">
                <Label>City</Label>
                    <Input id ="City" placeholder="Atlanta" className="w-7xl"></Input>
                </div>

                <div className ="relative col-span-2 left-5 top-10">
                <Label>Zip</Label>



<Input id ="Zip" placeholder="12345" className="w-7xl"></Input>
                </div>
                <div className ="relative col-span-2 left-5 top-10">
                <Label>Payment Method</Label>
                <RadioGroup defaultValue="Payment Type">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Apple" id="r1" />
                      <Label htmlFor="r1">Apple Pay</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Credit Card" id="r1" />
                      <Label htmlFor="r2">Credit Card</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Pay Pal" id="r1" />
                      <Label htmlFor="r1">Pay Pal</Label>
                    </div>
                      
                    </RadioGroup>
                </div>
                


                 </div>

            </Card>
        </div>
        </>
    )
}