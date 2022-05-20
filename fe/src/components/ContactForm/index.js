import PropTypes from 'prop-types';

import { Form, ButtonContainer } from './styles';

import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

export default function ContactForm({ buttonlabel }) {
  return (
    <Form>
      <FormGroup>
        <Input placeholder="Nome" />
      </FormGroup>

      <FormGroup
        error="O formato do e-mail é inválido."
      >
        <Input placeholder="E-mail" error />
      </FormGroup>

      <FormGroup>
        <Input placeholder="Telefone" />
      </FormGroup>

      <FormGroup>
        <Select>
          <option value="instagram">Instagram</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">
          {buttonlabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonlabel: PropTypes.string.isRequired,
};
