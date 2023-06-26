import {
  StyledList,
  StyledStepText,
  StyledBox,
} from './EmptyLibraryText.styled';

import { ReactComponent as ArrowIcon } from 'images/library/arrow.svg';
import { ReactComponent as BookIcon } from 'images/library/icon-book.svg';
import { ReactComponent as FlagIcon } from 'images/library/flag.svg';

export default function EmtpyLibraryText({ isEmptyLibrary, style }) {
  return (
    <>
      {!isEmptyLibrary && (
        <StyledBox style={style}>
          <StyledList>
            <li>
              <StyledStepText>Крок 1.</StyledStepText>
              <p className="step-text">
                <span>
                  <BookIcon />
                </span>
                Створіть особисту бібліотеку
              </p>

              <p className="sup-step-text">
                <span>
                  <ArrowIcon width={10} height={12} />
                </span>
                Додайте до неї книжки, які маєте намір прочитати.
              </p>
            </li>
            <li>
              <StyledStepText>Крок 2.</StyledStepText>
              <p className="step-text">
                <span>
                  <FlagIcon />
                </span>
                Сформуйте своє перше тренування
              </p>

              <p className="sup-step-text">
                <span>
                  <ArrowIcon width={10} height={12} />
                </span>
                Визначте ціль, оберіть період, розпочинайте тренування.
              </p>
            </li>
          </StyledList>
        </StyledBox>
      )}
    </>
  );
}
