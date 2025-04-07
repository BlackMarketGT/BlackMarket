import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AddItemForm from "./AddItemForm";

const AddProduct = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Add New Product</CardTitle>
      </CardHeader>
      <CardContent>
        <AddItemForm />
      </CardContent>
    </Card>
  );
};

export default AddProduct;
