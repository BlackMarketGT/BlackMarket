import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { NavigationBar } from "../components/NavigationBar"
import "./pages.css"


const Required = () => <span className="text-red-500 ml-1">*</span>

export default function Cart() {
  return (
    <>
      <div className="fixed top-0 w-full flex justify-center items-center pt-4 z-10">
        <NavigationBar />
      </div>

      <div className="pt-28 px-10">
        <h1 className="text-4xl font-bold text-white mb-8">Checkout</h1>

        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-10">
          {/* form/user details */}
          <Card className="bg-[#1a1a1a] text-white p-6 shadow-lg">
            <form className="grid grid-cols-2 gap-4">
              <div className="col-span-1">
                <Label>First Name<Required/></Label>
                <Input placeholder="Mark" className="bg-black text-white" />
              </div>
              <div className="col-span-1">
                <Label>Last Name<Required/></Label>
                <Input placeholder="Tempname" className="bg-black text-white" />
              </div>

              <div className="col-span-2">
                <Label>Email<Required/></Label>
                <Input placeholder="mark@example.com" className="bg-black text-white" />
              </div>

              <div className="col-span-2">
                <Label>Street Address<Required/></Label>
                <Input placeholder="123 Main St" className="bg-black text-white" />
              </div>

              <div className="col-span-1">
                <Label>Town / City<Required/></Label>
                <Input placeholder="Atlanta" className="bg-black text-white" />
              </div>
              <div className="col-span-1">
                <Label>ZIP Code<Required/></Label>
                <Input placeholder="12345" className="bg-black text-white" />
              </div>

              <div className="col-span-2 mt-4">
                <Label>Payment Method</Label>
                <RadioGroup defaultValue="credit" className="mt-2 space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="apple" id="apple" />
                    <Label htmlFor="apple">Apple Pay</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="credit" id="credit" />
                    <Label htmlFor="credit">Credit Card</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <Label htmlFor="paypal">PayPal</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="col-span-2 flex items-center space-x-2 mt-4">
                <Checkbox id="terms" />
                <Label htmlFor="terms">I accept the terms and conditions.<Required/></Label>
              </div>

              <div className="col-span-2 mt-4">
                <Button className="w-full bg-white text-black hover:bg-gray-200">Place Order</Button>
              </div>
            </form>
          </Card>

          {/* order summary */}
          <Card className="bg-[#1a1a1a] text-white p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Your Order</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Placeholder ×1</span>
                <span>$45.00</span>
              </div>
              <div className="flex justify-between text-sm text-gray-400">
                <span>Tax</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between font-semibold pt-2 border-t border-gray-600">
                <span>Total</span>
                <span>$45.00</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}