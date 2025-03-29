
import React from 'react';
import Layout from '@/components/Layout';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <Layout>
      <section className="pt-12 pb-20">
        <div className="container-custom">
          <div className="max-w-3xl mb-16">
            <h1 className="font-medium mb-6">Contact</h1>
            <p className="text-xl text-muted-foreground">
              Have a question, proposal, or just want to say hello? Feel free to reach out, and I'll get back to you soon.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3 bg-background rounded-xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-medium mb-6">Send a Message</h2>
              <ContactForm />
            </div>
            
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-background rounded-xl p-6 md:p-8 shadow-sm">
                <h3 className="text-lg font-medium mb-4">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Mail className="h-5 w-5 mt-0.5 mr-3 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <a href="mailto:hello@johndoe.com" className="text-muted-foreground hover:text-foreground transition-colors">
                        hello@johndoe.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Phone className="h-5 w-5 mt-0.5 mr-3 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Phone</p>
                      <a href="tel:+11234567890" className="text-muted-foreground hover:text-foreground transition-colors">
                        +1 (123) 456-7890
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="h-5 w-5 mt-0.5 mr-3 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Location</p>
                      <p className="text-muted-foreground">San Francisco, CA</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-background rounded-xl p-6 md:p-8 shadow-sm">
                <h3 className="text-lg font-medium mb-4">Connect</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">Twitter</a>
                  </li>
                  <li>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
                  </li>
                  <li>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
                  </li>
                  <li>
                    <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">Dribbble</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
