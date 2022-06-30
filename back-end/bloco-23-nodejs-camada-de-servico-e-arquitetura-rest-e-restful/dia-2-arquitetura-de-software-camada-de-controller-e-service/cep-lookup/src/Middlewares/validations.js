const runSchema = (schema) => async (unknown) => {
  const { error } = schema.validate(unknown);
  if (error) {
    switch (error.details[0].type) {
      case 'string.pattern.base':
        error.code = 400;
        error.message = 'Cep Inválido';
        throw error;
      // case 'string.pattern.base':
      //   error.code = 400;
      //   error.message = 'Cep Inválido';
      //   throw error;
      default:
        break;
    } 
  }
};

module.exports = runSchema;