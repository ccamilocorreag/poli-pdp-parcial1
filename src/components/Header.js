import Resume from "./Resume";

const Header = () => {
  return (
    <div class="container p-3">
      <div class="row align-items-center">
        <div class="col-1">
          <img src={"./logos/logo-parcial.png"} class="img-fluid" alt="logo-parcial" />
        </div>
        <div class="col-3">
          <h1>Tus Gastos</h1>
        </div>
        <div class="col-2">
        </div>
        <div class="col-6">
          <Resume></Resume>
        </div>
      </div>
    </div>
  );
};

export default Header;
