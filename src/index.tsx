import PropTypes from 'prop-types';

export function MyComponent(props: MyComponent.Props) {
  const { children } = props;

  return (
    <div>{children}</div>
  );
}

export namespace MyComponent {
  export interface Props {
    children?: React.ReactNode;
  }
}

MyComponent.propTypes = {
  children: PropTypes.node,
};
