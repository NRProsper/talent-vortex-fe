import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsAndConditionsPage() {
  return (
    <div className="container mx-auto px-4 md:px-20 py-8">
      <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>1. Introduction</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Welcome to Madona Drinks. These Terms and Conditions govern your use of our website and services. By accessing or using our website, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the website or use our services.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>2. Use of Our Services</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Our services are intended for personal and non-commercial use. You must be at least 18 years old and a resident of Rwanda to purchase alcoholic beverages from our store or website. We reserve the right to refuse service to anyone for any reason at any time.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>3. Online Orders and E-commerce</CardTitle>
          </CardHeader>
          <CardContent>
            <p>When placing an order through our website, you warrant that all information provided is true and accurate. We reserve the right to refuse or cancel your order if fraud or an unauthorized or illegal transaction is suspected.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>4. Product Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p>We strive to display our products and their colors as accurately as possible. However, we cannot guarantee that your computer monitor&apos;s display of any color will be accurate. We reserve the right to modify the prices of items without notice.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>5. Delivery and Shipping</CardTitle>
          </CardHeader>
          <CardContent>
            <p>We offer home delivery services within Kigali. Delivery times may vary depending on your location and the current demand. We are not responsible for delays caused by circumstances beyond our control.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>6. Loyalty Program</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Our loyalty program rewards customers with points for every purchase. These points can be redeemed for discounts on future purchases. We reserve the right to modify or terminate the loyalty program at any time.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>7. Intellectual Property</CardTitle>
          </CardHeader>
          <CardContent>
            <p>The content on our website, including text, graphics, logos, and images, is the property of Madona Drinks and is protected by Rwandan and international copyright laws.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>8. Limitation of Liability</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Madona Drinks shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of our services or any products purchased from us.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>9. Governing Law</CardTitle>
          </CardHeader>
          <CardContent>
            <p>These Terms shall be governed and construed in accordance with the laws of Rwanda, without regard to its conflict of law provisions.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>10. Changes to Terms</CardTitle>
          </CardHeader>
          <CardContent>
            <p>We reserve the right to modify these terms at any time. Your continued use of our website and services after any changes indicates your acceptance of the new Terms.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
