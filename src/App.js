import Com from "./Com";
import {
  AppBottom,
  AppContainer,
  AppInput,
  Box1,
  Box2,
  Box3,
  Box4,
} from "./style/style";

const App = () => {
  return (
    <AppContainer>
      <h1>Amila</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <AppBottom>button</AppBottom>

      <Com>
        <Box1></Box1>
        <Box2></Box2>
        <Box3></Box3>
        <Box4></Box4>
      </Com>
    </AppContainer>
  );
};

export default App;
