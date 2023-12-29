import style from "./index.module.scss";

const Slider = ({ toggleTheme }) => {
  return (
    <div class={style["theme-switch-wrapper"]}>
      <label class={style["theme-switch"]} for="checkbox">
        <input type="checkbox" id="checkbox" onChange={toggleTheme} />
        <div class={`${style["slider"]} ${style["round"]}`}></div>
      </label>
    </div>
  );
};

export default Slider;
