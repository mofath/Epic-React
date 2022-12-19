const useForm = <State extends Record<string, unknown>>(
  initialState: State
) => {
  const [values, setValues] = React.useState(initialState);
  const update = <Key extends keyof State>(name: Key, value: State[Key]) =>
    setValues((form) => ({ ...form, [name]: value }));

  return [values, update] as const;
};
