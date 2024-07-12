import { useState } from "react";
import CheckOtpForm from "components/templates/CheckOtpForm";
import SendOtpForm from "components/templates/SendOtpForm";

function AuthPage() {
  const [step, setStep] = useState(1);
  const [code, setCode] = useState("");
  const [mobile, setMobile] = useState("");
  return (
    <div>
      {step === 1 && (
        <SendOtpForm mobile={mobile} setMobile={setMobile} setStep={setStep} />
      )}
      {step === 2 && (
        <CheckOtpForm
          code={code}
          setCode={setCode}
          mobile={mobile}
          setStep={setStep}
        />
      )}
    </div>
  );
}

export default AuthPage;
