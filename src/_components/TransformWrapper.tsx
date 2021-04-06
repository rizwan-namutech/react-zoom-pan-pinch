import React from "react";
import { StateProvider } from "../_store/StateContext";
import { deleteUndefinedProps } from "../_store/utils";
import { getValidPropsFromObject } from "../_store/propsHandlers";
import { PropsList } from "../_store/interfaces/propsInterface";

const TransformWrapper = ({
  children,
  defaultPositionX,
  defaultPositionY,
  defaultScale,
  onWheelStart,
  onWheel,
  onWheelStop,
  onPanningStart,
  onPanning,
  onPanningStop,
  onPinchingStart,
  onPinching,
  onPinchingStop,
  onZoomChange,
  ...rest
}: PropsList) => {
  const props = { ...rest };
  if (props.options && props.options.limitToWrapper) {
    props.options.limitToBounds = true;
  }
  return (
    <StateProvider
      defaultValues={deleteUndefinedProps({
        positionX: defaultPositionX,
        positionY: defaultPositionY,
        scale: defaultScale,
      })}
      dynamicValues={deleteUndefinedProps(getValidPropsFromObject(props))}
      onWheelStart={onWheelStart}
      onWheel={onWheel}
      onWheelStop={onWheelStop}
      onPanningStart={onPanningStart}
      onPanning={onPanning}
      onPanningStop={onPanningStop}
      onPinchingStart={onPinchingStart}
      onPinching={onPinching}
      onPinchingStop={onPinchingStop}
      onZoomChange={onZoomChange}
    >
      {children}
    </StateProvider>
  );
};

export { TransformWrapper };
