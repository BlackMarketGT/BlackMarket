import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const orders = [
  { id: 1, customer: "John Doe", total: 299.99 },
  { id: 2, customer: "Jane Smith", total: 499.99 },
];

const OrderList = () => {
  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <Card key={order.id}>
          <CardHeader>
            <CardTitle>Order #{order.id}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Customer: {order.customer}</p>
            <p>Total: ${order.total.toFixed(2)}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default OrderList;
