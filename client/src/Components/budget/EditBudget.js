import { useState } from 'react';
import styled from 'styled-components';

const EditBudget = props => {
  const { budget, editBudget, setEditBudget, handleEditBudget, originBudget } =
    props;
  const [inputBudget, setInputBudget] = useState(originBudget);

  const handleInputBudget = e => {
    const value = e.target.value;
    const onlyNumber = value.replace(/[^0-9]/g, '');
    setInputBudget(onlyNumber);
  };

  return (
    <>
      {editBudget ? (
        <ModalContainer onClick={() => setEditBudget(false)}>
          <ModalWrapper onClick={e => e.stopPropagation()}>
            <div className="modal__header">
              <div className="title">Set budget</div>
              <div
                className="cancel-button"
                onClick={() => setEditBudget(false)}
              >
                <svg viewBox="0 0 16 16" className="css-1aecrfn">
                  <path
                    fillRule="evenodd"
                    fill="currentColor"
                    d="M12.9541732,4.96004034 C13.1437497,4.77046381 13.1435266,4.45113844 12.9464351,4.25404691 L12.2459531,3.55356494 C12.0404329,3.34804477 11.7327775,3.35300891 11.5399597,3.54582678 L8,7.08578644 L4.46004034,3.54582678 C4.27046381,3.35625025 3.95113844,3.3564734 3.75404691,3.55356494 L3.05356494,4.25404691 C2.84804477,4.45956708 2.85300891,4.76722247 3.04582678,4.96004034 L6.58578644,8.5 L3.04582678,12.0399597 C2.85625025,12.2295362 2.8564734,12.5488616 3.05356494,12.7459531 L3.75404691,13.4464351 C3.95956708,13.6519552 4.26722247,13.6469911 4.46004034,13.4541732 L8,9.91421356 L11.5399597,13.4541732 C11.7295362,13.6437497 12.0488616,13.6435266 12.2459531,13.4464351 L12.9464351,12.7459531 C13.1519552,12.5404329 13.1469911,12.2327775 12.9541732,12.0399597 L9.41421356,8.5 L12.9541732,4.96004034 Z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="input__container">
              <svg
                className="svg-icon--20"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.13518 12.5537C3.30418 13.1921 3.88179 13.6367 4.54217 13.6367C5.19597 13.6367 5.76954 13.2008 5.94452 12.5708L7.14481 8.24977H8.50262L9.71893 12.5804C9.89438 13.205 10.464 13.6367 11.1129 13.6367C11.7694 13.6367 12.3438 13.1949 12.5123 12.5603L13.6564 8.24977H15.25C15.6642 8.24977 16 7.91399 16 7.49977C16 7.08556 15.6642 6.74977 15.25 6.74977H0.75C0.335786 6.74977 0 7.08556 0 7.49977C0 7.91399 0.335786 8.24977 0.75 8.24977H1.99581L3.13518 12.5537ZM11.508 8.24977H10.3505L10.8987 10.3588C10.9077 10.3936 10.9392 10.418 10.9752 10.418C11.0125 10.418 11.0447 10.392 11.0526 10.3556L11.508 8.24977ZM5.32653 8.24977H4.17526L4.63487 10.3558C4.64279 10.3921 4.67492 10.418 4.71206 10.418C4.74817 10.418 4.77968 10.3935 4.78861 10.3585L5.32653 8.24977ZM14.3499 5.63672H12.0732L12.5839 3.27563C12.6991 2.74324 13.17 2.36328 13.7147 2.36328C14.4743 2.36328 15.0278 3.08285 14.8329 3.81701L14.3499 5.63672ZM5.9931 5.63672H9.67122L9.07032 3.32507C8.92309 2.75867 8.41178 2.36328 7.82656 2.36328C7.23916 2.36328 6.72653 2.76156 6.58134 3.33073L5.9931 5.63672ZM3.605 5.63672H1.30406L0.825053 3.82726C0.629279 3.08773 1.1869 2.36328 1.95191 2.36328C2.49992 2.36328 2.97393 2.745 3.09077 3.28041L3.605 5.63672Z"
                  fill="#333333"
                />
              </svg>
              <input
                id="budget"
                className="input--default-icon"
                placeholder={'예산을 입력해주세요'}
                value={inputBudget || ''}
                onChange={handleInputBudget}
              />
            </div>
            <div className="submit_frame">
              <button
                className="button--primary"
                onClick={() => {
                  if (inputBudget < budget.totalExpenses) {
                    handleEditBudget(inputBudget);
                    setInputBudget('');
                  } else {
                    handleEditBudget(inputBudget);
                  }
                }}
              >
                Set Budget
              </button>
              <button
                className="button--default button--subtle"
                onClick={() => setEditBudget(false)}
              >
                Cancel
              </button>
            </div>
          </ModalWrapper>
        </ModalContainer>
      ) : null}
      <EditBudgetButton
        className="button--default button--subtle"
        onClick={() => {
          setEditBudget(!editBudget);
        }}
      >
        Edit Budget
      </EditBudgetButton>
    </>
  );
};

export default EditBudget;

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10000;
`;

const ModalWrapper = styled.div`
  padding: 24px;
  min-width: 460px;
  background-color: var(--white);
  border-radius: 5px;
  box-shadow: 0px 0px 1px rgba(9, 30, 66, 0.31),
    0px 8px 12px rgba(9, 30, 66, 0.15);

  .modal__header {
    display: flex;
    gap: var(--spacing-4);
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: var(--spacing-4);

    > .title {
      font-size: var(--default-heading-font-size);
      line-height: var(--default-heading-line-height);
      font-weight: 500;
    }

    > .cancel-button {
      margin-top: var(--spacing-1);
      width: 18px;
      height: 18px;

      > svg path {
        color: var(--light-gray-5);
      }

      &:hover > svg path {
        color: var(--light);
      }
    }
  }

  > .input__container {
    position: relative;
    margin-bottom: var(--spacing-4);
    width: 100%;

    > .input--default-icon {
      width: 100%;
    }

    > .svg-icon--20 {
      margin-left: 8px;
      width: 20px;
    }
  }

  > .submit_frame {
    display: flex;
    gap: var(--spacing-2);

    > .button--subtle {
      color: var(--light);
    }
  }
`;

const EditBudgetButton = styled.button`
  &.button--subtle {
    color: var(--light);

    &:hover {
      color: var(--dark-gray-2);
    }
  }
`;
