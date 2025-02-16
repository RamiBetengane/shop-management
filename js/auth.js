// login user
document.querySelector("#loginForm").addEventListener("submit", async function (e) {
  e.preventDefault(); // منع إرسال النموذج بالطريقة التقليدية

  // الحصول على البيانات من الحقول
  const username = document.querySelector("#yourUsername").value;
  const password = document.querySelector("#yourPassword").value;

  // إعداد البيانات لإرسالها إلى الـ API
  const loginData = {
    email: username, // إذا كنت تستخدم الـ email كـ username
    password: password,
  };

  try {
    // إرسال الطلب إلى الـ API
    const response = await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    const result = await response.json();

    // معالجة الأخطاء بناءً على الحالة والرسالة
    if (response.ok) {
      // إذا كانت الاستجابة ناجحة، حفظ التوكن في الـ localStorage
      localStorage.setItem("access_token", result.access_token);
      alert("Login successful!");
    } else if (response.status === 422) { 
      // إذا كان هناك أخطاء تحقق من البيانات (Validation errors)
      const errorMessages = result.errors;
      let errorText = "Validation Errors:\n";
      for (const key in errorMessages) {
        if (errorMessages.hasOwnProperty(key)) {
          errorText += `${key}: ${errorMessages[key].join(', ')}\n`;
        }
      }
      alert(errorText);
    } else if (response.status === 401) {
      // إذا كانت المشكلة في الاعتماديات (اسم المستخدم أو كلمة المرور غير صحيحة)
      alert("Login failed: Incorrect username or password.");
    } else {
      alert("Login failed: " + result.message);
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred. Please try again.");
  }
});











// register new user
document
.querySelector("form")
.addEventListener("submit", async function (e) {
  e.preventDefault(); // منع إرسال النموذج بشكل تقليدي

  // الحصول على القيم من الحقول
  const name = document.querySelector("#yourName").value;
  const email = document.querySelector("#yourEmail").value;
  const password = document.querySelector("#yourPassword").value;
  const passwordConfirmation = document.querySelector("#passwordConfirmation").value;

  // إعداد بيانات الطلب
  const data = {
    name: name,
    email: email,
    password: password,
    password_confirmation: passwordConfirmation,
  };

  try {
    // إرسال البيانات إلى الـ API باستخدام fetch
    const response = await fetch("http://127.0.0.1:8000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // التعامل مع الاستجابة
    const result = await response.json();

    if (response.ok) {
      // تسجيل المستخدم تم بنجاح
      alert("User registered successfully!");
      console.log(result);
    } else {
      // عرض الأخطاء إن وجدت
      alert("Registration failed: " + JSON.stringify(result.errors));
      console.log(result);
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred. Please try again.");
  }
});