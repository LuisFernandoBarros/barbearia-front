import { FormControl, FormGroup } from '@angular/forms';

export class FormValidations {
 

  static cepValidator(control: FormControl) {
    const cep = control.value;
    if (cep && cep !== '') {
      const validacep = /^[0-9]{8}$/;
      return validacep.test(cep) ? null : { cepInvalido : true };
    }
    return null;
  }

  static onlyNumbersValidator(control: FormControl){
    const telefone = control.value;
    if (telefone && telefone !== '') {
      const validaTelefone = /^[0-9]+$/;
      return validaTelefone.test(telefone) ? null : { numeroInvalido : true };
    }
    return null;
  }

  static onlyCharsValidator(control: FormControl){
    const texto = control.value;
    if (texto && texto !== '') {
      const validatexto = /^[A-Za-z," "]+$/;
      return validatexto.test(texto) ? null : { textoInvalido : true };
    }
    return null;
  }  
/*
  static equalsTo(otherField: string) {
    const validator = (formControl: FormControl) => {
      if (otherField == null) {
        throw new Error('É necessário informar um campo.');
      }

      if (!formControl.root || !(<FormGroup>formControl.root).controls) {
        return null;
      }

      const field = (<FormGroup>formControl.root).get(otherField);

      if (!field) {
        throw new Error('É necessário informar um campo válido.');
      }

      if (field.value !== formControl.value) {
        return { equalsTo : otherField };
      }

      return null;
    };
    return validator;
  }
*/
  static getErrorMsg(fieldName: string, validatorName: string, validatorValue?: any) {
    const config = {
      'required': `${fieldName} é obrigatório.`,
      'minlength': `${fieldName} precisa ter no mínimo ${validatorValue.requiredLength} caracteres.`,
      'maxlength': `${fieldName} precisa ter no máximo ${validatorValue.requiredLength} caracteres.`,
      'cepInvalido': 'CEP inválido.',
      'emailInvalido': 'Email já cadastrado!',
      'equalsTo': 'Campos não são iguais',
      'pattern': 'Campo inválido',
      'numeroInvalido': 'Número inválido.',
      'textoInvalido': 'Apenas letras'
    };

    return config[validatorName];
  }
}