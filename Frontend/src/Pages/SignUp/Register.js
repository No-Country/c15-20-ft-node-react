export const PSW_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// (?=.*[a-z]): Asegura que haya al menos una letra minúscula.
// (?=.*[A-Z]): Asegura que haya al menos una letra mayúscula.
// (?=.*\d): Asegura que haya al menos un dígito.
// (?=.*[@$!%*?&]): Asegura que haya al menos un carácter especial (puedes personalizar la lista de caracteres especiales según tus necesidades).
// [A-Za-z\d@$!%*?&]{8,}: Coincide con cualquier combinación de letras, dígitos y caracteres especiales, con una longitud mínima de 8 caracteres.
