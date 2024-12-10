import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Documentation() {
  return (
    <ScrollArea className="flex-grow p-6 bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-6 text-primary">Documentation</h1>
          
          <Card className="mb-8" id="introduction">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p>
                Welcome to our comprehensive documentation. This guide provides detailed information about our AtTheViewBox, 
                its features, and how to get the most out of it.
              </p>
            </CardContent>
          </Card>
          <Card className="mb-8" id="api-reference">
            <CardContent className="pt-6 space-y-4">
              <h2 className="text-2xl font-semibold mb-4">PC and Mobile DICOM Tool Shortcuts</h2>
              <p className="font-semibold mb-4">
              PC Shortcuts
              </p>
           
              <ul className="mt-4 space-y-2">
                <li>Scroll - Scroll Wheel</li>
                <li> Window - Left Click Drag</li>
                <li> Zoom - Right Click Drag</li>
                <li> Pan - Scroll Click Drag</li>
              </ul>


              <p className="font-semibold mb-4">
              Mobile Shortcuts
              </p>
              <ul className="mt-4 space-y-2">
                <li>Scroll - Vertical Swipe</li>
                <li> Window - 3-finger Swipe</li>
                <li> Zoom - 2-Finger Pinch</li>
                <li> Pan - 2-Finger Swipe</li>
              </ul>
              
            </CardContent>
          </Card>

          <Card className="mb-8" id="api-reference">
            <CardContent className="pt-6 space-y-4">
              <h2 className="text-2xl font-semibold mb-4">Session Rooms</h2>
              <p className="font-semibold mb-4">
              Team Mode 
              </p>
              <p>
              Sharing session where a user can share their interactions with everyone in the session room. 
              This can be used in a smaller group setting where users are quickly going through cases.
              </p>
             
              <p className="font-semibold mb-4">
              Presentation Mode
              </p>
              <p >
              Sharing session where a user can only share to the host screen.
              This can be used in a presentation setting, where a lot of users can independently go through with the case. 
              When key finding want to be shared, it will only broadcast to the presenter screen.
              </p>

    
            </CardContent>
          </Card>
          <Card className="mb-8" id="getting-started">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
              <p>
                To begin using our product, follow these steps:
              </p>
              <ol className="list-decimal list-inside mt-4 space-y-2">
                <li>Sign up and Login at <a href ="https://attheviewbox.github.io/audience/">https://attheviewbox.github.io/audience/</a></li>
                <li>Install <a href ='https://chromewebstore.google.com/detail/attheviewbox-url-generato/picmimadkdmjjkpoffoceooaeaggafoi'>AtTheViewBox</a> Chrome extension </li>
                <li>Find and/or upload case to <a href ='Pacsbin.com'>Pacsbin.com</a> In extension, drag case you want and copy URL</li>
                <li>Paste URL in any iframe.</li>
              </ol>
            </CardContent>
          </Card>
          {/** 
          <Card className="mb-8" id="features">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Features</h2>
              <ul className="space-y-4">
                <li>
                  <Badge variant="outline" className="mb-2">Feature 1</Badge>
                  <p>Detailed description of feature 1 and its benefits.</p>
                </li>
                <li>
                  <Badge variant="outline" className="mb-2">Feature 2</Badge>
                  <p>Explanation of feature 2 and how to use it effectively.</p>
                </li>
                <li>
                  <Badge variant="outline" className="mb-2">Feature 3</Badge>
                  <p>Overview of feature 3 and its unique capabilities.</p>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="mb-8" id="api-reference">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">API Reference</h2>
              <p>
                Our API allows you to integrate our services into your own applications. 
                Here's a brief overview of the main endpoints:
              </p>
              <ul className="mt-4 space-y-2">
                <li><code className="bg-muted p-1 rounded">/api/users</code> - Manage user accounts</li>
                <li><code className="bg-muted p-1 rounded">/api/products</code> - Interact with product data</li>
                <li><code className="bg-muted p-1 rounded">/api/orders</code> - Handle order processing</li>
              </ul>
              <p className="mt-4">
                For detailed API documentation, including request/response formats and authentication, 
                please refer to our full API documentation.
              </p>
            </CardContent>
          </Card>
          
          <Card className="mb-8" id="faq">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
              <dl className="space-y-4">
                <div>
                  <dt className="font-semibold">Q: How do I reset my password?</dt>
                  <dd>A: You can reset your password by clicking the "Forgot Password" link on the login page and following the instructions sent to your email.</dd>
                </div>
                <div>
                  <dt className="font-semibold">Q: Is there a mobile app available?</dt>
                  <dd>A: Yes, we offer mobile apps for both iOS and Android platforms. You can download them from the respective app stores.</dd>
                </div>
                <div>
                  <dt className="font-semibold">Q: How can I contact support?</dt>
                  <dd>A: You can reach our support team by emailing support@example.com or by using the in-app chat feature during business hours.</dd>
                </div>
              </dl>
            </CardContent>
          </Card>*/}
        </div>
      </div>
    </ScrollArea>
  )
}