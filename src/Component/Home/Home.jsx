import PatientLogin from "../Authentication-Form/LoginForm/PatientLogin";
import RegisterForm from "../Authentication-Form/RegisterForm/RegisterForm";

const Home = () => {
  return (
    <div>
      <h1>This is home page</h1>
      <button className="btn btn-neutral">Neutral</button>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
      <button className="btn btn-accent">Accent</button>
      <button className="btn btn-info">Info</button>
      <button className="btn btn-success">Success</button>
      <button className="btn btn-warning">Warning</button>
      <button className="btn btn-error">Error</button>
      <div className="mt-10">
        <PatientLogin></PatientLogin>
        <RegisterForm></RegisterForm>
      </div>
    </div>
  );
};

export default Home;
