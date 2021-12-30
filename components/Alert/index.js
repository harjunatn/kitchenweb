import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledAlert, AlertIcon, AlertText, AlertClose } from "./Alert.styled";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const propTypes = {
  /**
   * Set alert color
   *
   * @type {"blue" | "green" | "grey" | "red" | "yellow"}
   */
  color: PropTypes.oneOf(["blue", "green", "grey", "red", "yellow"]),

  /**
   * Set alert icon
   */
  icon: PropTypes.object,

  /**
   * Set emoticon (an emoticon character)
   */
  emoticon: PropTypes.string,

  /**
   * Set alert with solid border color
   */
  bordered: PropTypes.bool,

  /**
   * Set alert with close button
   */
  withCloseButton: PropTypes.bool,

  /**
   * Callback after close button has been clicked
   */
  onCloseClick: PropTypes.func,
};

const defaultProps = {
  color: "red",
  icon: null,
  emoticon: null,
  bordered: false,
  withCloseButton: false,
  onCloseClick: () => {},
};

const Alert = React.forwardRef((props, ref) => {
  const {
    children,
    className,
    color,
    icon,
    emoticon,
    bordered,
    withCloseButton,
    onCloseClick,
    ...restProps
  } = props;
  const alertClass = classNames("c-alert", className);

  return (
    <StyledAlert
      data-testid="qa-alert"
      ref={ref}
      className={alertClass}
      color={color}
      bordered={bordered}
      {...restProps}
    >
      {icon || emoticon ? (
        <>
          <AlertIcon data-testid="qa-alert-icon-wrapper">
            {icon && (
              <FontAwesomeIcon data-testid="qa-alert-icon" icon={icon} />
            )}
            {emoticon}
          </AlertIcon>
          <AlertText data-testid="qa-alert-icon-text">{children}</AlertText>
        </>
      ) : (
        <div data-testid="qa-alert-text" className="u-w-full">
          {children}
        </div>
      )}
      {withCloseButton && (
        <AlertClose
          data-testid="qa-alert-close"
          color={color}
          onClick={onCloseClick}
        >
          <FontAwesomeIcon data-testid="qa-alert-close-icon" icon={faTimes} />
        </AlertClose>
      )}
    </StyledAlert>
  );
});

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

export default Alert;
