// src/api/auth.js
export const registerUser = async (formData) => {
  try {
    const response = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    const data = await response.json();
    if (!response.ok) return { success: false, error: data.error };

    return { success: true, user: data.user };
  } catch (error) {
    return { success: false, error: 'تعذر الاتصال بالخادم' };
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
      const data = await response.json();
      return { success: false, error: data.error || 'فشل تسجيل الدخول' };
    }

    const data = await response.json();
    return { success: true, user: data.user, token: data.token };
  } catch (error) {
    console.error('Login error:', error); // مهم جداً للتصحيح
    return { success: false, error: 'تعذر الاتصال بالخادم' };
  }
};