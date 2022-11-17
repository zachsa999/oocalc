let env = {};
function set_public_env(environment) {
  env = environment;
}
export {
  env as e,
  set_public_env as s
};
