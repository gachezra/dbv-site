'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Download, Mail, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import axios from 'axios';

export default function InvoicePage() {
  const params = useParams();
  const [invoice, setInvoice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const mockInvoice = {
      id: params.id,
      date: new Date().toLocaleDateString(),
      items: JSON.parse(localStorage.getItem('selectedProducts') || '[]'),
      companyInfo: {
        name: 'DBV Electronics',
        address: '123 Tech Street',
        phone: '+254 123 456 789',
        email: 'sales@dbv.co.ke',
        website: 'www.dbv.co.ke'
      }
    };
    setInvoice(mockInvoice);
    setLoading(false);
  }, [params.id]);

  const calculateTotal = (items) => {
    return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const handleDownload = async () => {
    try {
      const response = await axios.post('/api/generate-pdf', invoice, {
        responseType: 'blob'
      });
      
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `invoice-${invoice.id}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Error downloading invoice:', error);
    }
  };

  const handleEmailSend = async () => {
    setSending(true);
    try {
      await axios.post('/api/send-invoice', {
        invoiceId: invoice.id,
        email: 'customer@example.com' // In real app, get from user input or profile
      });
      alert('Invoice sent successfully!');
    } catch (error) {
      console.error('Error sending invoice:', error);
      alert('Failed to send invoice. Please try again.');
    } finally {
      setSending(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-3">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header Actions */}
        <div className="bg-sky-600 p-4 text-white flex justify-between items-center">
          <Link 
            href="/catalog" 
            className="flex items-center gap-2 hover:text-sky-100 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Products
          </Link>
          <div className="flex gap-4">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 bg-white text-sky-600 px-4 py-2 rounded-lg hover:bg-sky-50 transition-colors"
            >
              <Download size={20} />
              Download PDF
            </button>
            <button
              onClick={handleEmailSend}
              disabled={sending}
              className="flex items-center gap-2 bg-white text-sky-600 px-4 py-2 rounded-lg hover:bg-sky-50 transition-colors disabled:opacity-50"
            >
              <Mail size={20} />
              {sending ? 'Sending...' : 'Send to Email'}
            </button>
          </div>
        </div>

        {/* Invoice Content */}
        <div className="p-8">
          {/* Company Info */}
          <div className="mb-8 border-b pb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {invoice.companyInfo.name}
            </h1>
            <div className="text-gray-600 space-y-1">
              <p>{invoice.companyInfo.address}</p>
              <p>Phone: {invoice.companyInfo.phone}</p>
              <p>Email: {invoice.companyInfo.email}</p>
              <p>Website: {invoice.companyInfo.website}</p>
            </div>
          </div>

          {/* Invoice Details */}
          <div className="mb-8">
            <div className="flex justify-between mb-4">
              <div>
                <h2 className="text-lg font-semibold text-gray-700">Invoice</h2>
                <p className="text-gray-600">#{invoice.id}</p>
              </div>
              <div className="text-right">
                <h2 className="text-lg font-semibold text-gray-700">Date</h2>
                <p className="text-gray-600">{invoice.date}</p>
              </div>
            </div>
          </div>

          {/* Items Table */}
          <div className="mb-8 text-black">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-2">Item</th>
                  <th className="text-right py-3 px-2">Quantity</th>
                  <th className="text-right py-3 px-2">Price</th>
                  <th className="text-right py-3 px-2">Total</th>
                </tr>
              </thead>
              <tbody>
                {invoice.items.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-4 px-2">{item.name}</td>
                    <td className="text-right py-4 px-2">{item.quantity}</td>
                    <td className="text-right py-4 px-2">
                      Ksh. {item.price.toFixed(2)}
                    </td>
                    <td className="text-right py-4 px-2">
                      Ksh. {(item.quantity * item.price).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Total */}
          <div className="border-t-2 border-gray-200 pt-4 text-black">
            <div className="flex justify-end">
              <div className="w-64">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Subtotal:</span>
                  <span>Ksh. {calculateTotal(invoice.items).toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">VAT (16%):</span>
                  <span>
                    Ksh. {(calculateTotal(invoice.items) * 0.16).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between border-t border-gray-200 pt-2">
                  <span className="font-bold">Total:</span>
                  <span className="font-bold">
                    Ksh. {(calculateTotal(invoice.items) * 1.16).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 p-8 text-center text-gray-600">
          <p>Thank you for your business!</p>
        </div>
      </div>
    </div>
  );
}