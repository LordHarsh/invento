import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-28 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <Card className="bg-white dark:bg-gray-800 shadow-lg">
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Privacy Policy</h1>
            
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-8">
              Last Updated: January 2, 2025
            </div>

            <section className="space-y-8">
              {/* Introduction */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-purple-600 mb-4">1. Introduction</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Welcome to Invento (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy and ensuring 
                  the security of your personal information. This Privacy Policy explains how we collect, use, disclose, 
                  and safeguard your information when you use our automated resume creation service, website, and related 
                  services (collectively, the &quot;Service&quot;).
                </p>
              </div>

              {/* Information We Collect */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-purple-600 mb-4">2. Information We Collect</h2>
                
                <div className="ml-4 space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-gray-800 dark:text-purple-500 mb-2">2.1 Information You Provide</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">We collect information that you voluntarily provide when using our Service, including:</p>
                    <ul className="list-disc ml-6 text-gray-600 dark:text-gray-400 space-y-1">
                      <li>Personal identification information (name, email address, phone number)</li>
                      <li>Professional information (work history, education, skills, certifications)</li>
                      <li>Account credentials</li>
                      <li>Communication preferences</li>
                      <li>Any other information you choose to provide</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-gray-800 dark:text-purple-500 mb-2">2.2 Automated Data Collection</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">When you use our Service, we automatically collect:</p>
                    <ul className="list-disc ml-6 text-gray-600 dark:text-gray-400 space-y-1">
                      <li>Device information (IP address, browser type, operating system)</li>
                      <li>Usage data (pages visited, features used, time spent)</li>
                      <li>Location data (based on IP address)</li>
                      <li>Cookie and tracking information</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-gray-800 dark:text-purple-500 mb-2">2.3 Third-Party Platform Integration</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-medium text-gray-800 dark:text-purple-400 mb-2">LinkedIn Integration:</h4>
                        <ul className="list-disc ml-6 text-gray-600 dark:text-gray-400 space-y-1">
                          <li>Professional profile information</li>
                          <li>Work history</li>
                          <li>Education details</li>
                          <li>Skills and endorsements</li>
                          <li>Professional connections</li>
                          <li>Profile picture</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-gray-800 dark:text-purple-400 mb-2">GitHub Integration:</h4>
                        <ul className="list-disc ml-6 text-gray-600 dark:text-gray-400 space-y-1">
                          <li>Public repository information</li>
                          <li>Contribution history</li>
                          <li>Programming languages used</li>
                          <li>Project descriptions</li>
                          <li>Profile information</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* How We Use Your Information */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-purple-600 mb-4">3. How We Use Your Information</h2>
                <div className="ml-4 space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-gray-800 dark:text-purple-500 mb-2">3.1 Core Service Functionality</h3>
                    <ul className="list-disc ml-6 text-gray-600 dark:text-gray-400 space-y-1">
                      <li>Creating and optimizing your resume</li>
                      <li>Maintaining and improving our resume generation algorithm</li>
                      <li>Providing customer support</li>
                      <li>Processing your requests</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mt-8">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-purple-600 mb-4">Contact Information</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-2">For privacy-related inquiries:</p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Email: hb8088@gmail.com</li>
                  <li>Email: bs2656@gmail.com</li>
                  {/* <li>Address: [Your Company Address]</li>
                  <li>Phone: [Your Company Phone]</li> */}
                </ul>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
