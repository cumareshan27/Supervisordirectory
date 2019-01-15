import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Textfield(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}