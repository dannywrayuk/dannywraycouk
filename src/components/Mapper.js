export const Mapper = ({ Component, data, key, ...rest }) =>
  data.map((itemData, id) => (
    <Component key={"Mapper" + key + id} data={itemData} {...rest} />
  ));
