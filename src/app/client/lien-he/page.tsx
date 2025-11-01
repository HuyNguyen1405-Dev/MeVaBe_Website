import React from 'react';

export default function ContactPage() {
  return (
    <section className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-semibold mb-6">Liên hệ</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Họ tên</label>
          <input className="mt-1 block w-full border rounded-md p-2" placeholder="Họ và tên" />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input className="mt-1 block w-full border rounded-md p-2" placeholder="email@example.com" />
        </div>
        <div>
          <label className="block text-sm font-medium">Nội dung</label>
          <textarea className="mt-1 block w-full border rounded-md p-2" rows={5} />
        </div>
        <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded-md">Gửi liên hệ</button>
      </form>
    </section>
  );
}
