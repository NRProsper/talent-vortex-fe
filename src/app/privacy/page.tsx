import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 md:px-20 py-8">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>1. Introduction</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Madona Drinks is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase from our store.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>2. Information We Collect</CardTitle>
          </CardHeader>
          <CardContent>
            <p>We collect personal information that you provide to us, such as your name, address, email address, phone number, and payment information when you make a purchase or sign up for our loyalty program. We also automatically collect certain information about your device and how you interact with our website.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>3. How We Use Your Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p>We use the information we collect to:</p>
            <ul className="list-disc list-inside mt-2">
              <li>Process your orders and provide customer service</li>
              <li>Communicate with you about your orders, our products, and promotions</li>
              <li>Personalize your shopping experience</li>
              <li>Improve our website and services</li>
              <li>Prevent fraud and enhance the security of our website</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>4. Sharing Your Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p>We do not sell your personal information. We may share your information with third-party service providers who help us operate our business, such as payment processors and delivery services. We may also disclose your information if required by law or to protect our rights.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>5. Data Security</CardTitle>
          </CardHeader>
          <CardContent>
            <p>We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>6. Cookies and Tracking Technologies</CardTitle>
          </CardHeader>
          <CardContent>
            <p>We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>7. Third-Party Links</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Our website may contain links to third-party websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>8. Children&apos;s Privacy</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Our services are not intended for use by children under the age of 18. We do not knowingly collect personal information from children under 18.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>9. Changes to This Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;last updated&quot; date.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>10. Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p>If you have any questions about this Privacy Policy, please contact us at privacy@madonadrinks.com or visit our store in Kigali.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

