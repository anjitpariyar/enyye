import { NavStyle, Nav, Label, Select } from "./styled/NavStyle.styled";
import { Container } from "../../../styled/Container";

const LowerNav = () => {
  return (
    <NavStyle>
      <Container>
        <Nav>
          <Label htmlFor="lang">Select language</Label>
          <Select id="lang">
            <option value="1" defaultValue>
              Hindi
            </option>
          </Select>
        </Nav>
      </Container>
    </NavStyle>
  );
};

export default LowerNav;
