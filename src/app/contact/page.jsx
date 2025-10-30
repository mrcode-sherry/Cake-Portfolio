import OrderForm from '../../components/OrderForm.jsx';
import { Suspense } from 'react';

const ContactPage = () => {
  return (
    <div style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
      <h1 style={{ color: 'var(--primary)' }}>Contact Us / Order Form</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <OrderForm />
      </Suspense>
    </div>
  );
};

export default ContactPage;