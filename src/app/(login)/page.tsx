import Form from "next/form";
import FormInput from "@/app/components/form-input";


export default function Home() {
  return (
      <div className="flex flex-col items-center justify-between m-10">
          <h1>당신의 Eating 구</h1>
          <Form className="m-10">
              <FormInput name="email" placeholder="아이디"/>
              <FormInput name="password" placeholder="비밀번호"/>
          </Form>
      </div>
  );
}
