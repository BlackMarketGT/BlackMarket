import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {AddressForm, PasswordForm, PersonalInfoForm } from "./forms"
import { NavigationBar } from "../components/NavigationBar"
const AccountPage = () => {
  return (
    <>
    <div className="fixed top-0 w-full flex justify-center items-center pt-4  z-10">
      <NavigationBar />
    </div>
    <div className="w-7/12 mx-auto pt-40 flex flex-col justify-center text-center">
      <Card>
        <CardHeader>
          <CardTitle>Password</CardTitle>
        </CardHeader>
        <CardContent>
          <PasswordForm/>
        </CardContent>
      </Card>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Address</CardTitle>
        </CardHeader>
        <CardContent>
          <AddressForm/>
        </CardContent>
      </Card>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Personal Info</CardTitle>
        </CardHeader>
        <CardContent>
          <PersonalInfoForm/>
        </CardContent>
      </Card>
    </div>
    </>
  )
}

export default AccountPage;