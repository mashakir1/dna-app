import { screen, fireEvent, render } from "@testing-library/react";

import { Modal, ModalProps } from "components/Modals";

describe("Modal", () => {
  it("renders an empty modal", () => {
    const emptyContent = <></>;
    const modal = renderModal({
      visible: true,
      children: emptyContent
    });

    expect(modal).toMatchSnapshot();
  });

  it("can hide a modal", () => {
    const emptyContent = <></>;
    const modal = renderModal({
      visible: false,
      children: emptyContent
    });

    expect(modal).toMatchSnapshot();
  });

  it("renders content within the modal", () => {
    const content = <span>test</span>;
    const modal = renderModal({
      visible: true,
      children: content
    });

    expect(modal).toMatchSnapshot();
  });

  it("renders the close button", () => {
    const emptyContent = <></>;
    const modal = renderModal({
      visible: true,
      closeButton: true,
      children: emptyContent
    });

    expect(modal).toMatchSnapshot();
  });

  it("handles the close button correctly", () => {
    const emptyContent = <></>;
    const testSetVisible = jest.fn();

    const modal = renderModal({
      visible: true,
      closeButton: true,
      setVisible: testSetVisible,
      children: emptyContent
    });

    expect(modal).toMatchSnapshot();

    fireEvent.click(screen.queryByRole("button"));
    expect(testSetVisible).toHaveBeenCalledWith(false);
  });
});

describe("Paginated Modal", () => {
  test("first page has no buttons", () => {
    const firstPage = <span>firstPage</span>;
    const pagination = {
      pageNumber: 0,
      setPageNumber: () => null
    };

    const modal = renderModal({
      paginationProps: pagination,
      visible: true,
      children: firstPage
    });

    expect(screen.queryByRole("button")).toBeFalsy();
    expect(modal).toMatchSnapshot();
  });

  test("second page has buttons which are clickable", () => {
    const secondPage = <span>secondPage</span>;
    const testSetPageNumber = jest.fn();
    const pagination = {
      pageNumber: 1,
      setPageNumber: testSetPageNumber
    };

    const modal = renderModal({
      paginationProps: pagination,
      visible: true,
      children: secondPage,
    });

    expect(screen.getByRole("button")).toBeTruthy();
    expect(modal).toMatchSnapshot();

    fireEvent.click(screen.queryByRole("button"));
    expect(testSetPageNumber).toHaveBeenCalledWith(0);
  });
});

const renderModal = (props: ModalProps) => {
  return render(<Modal {...props}>{props.children}</Modal>).container;
};
