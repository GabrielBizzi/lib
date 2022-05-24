/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  InputHTMLAttributes,
  useRef,
  useCallback,
  useState,
} from 'react';
import { FormHandles } from '@unform/core';
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded';
import KeyboardBackspaceRoundedIcon from '@material-ui/icons/KeyboardBackspaceRounded';
import {
  Badge,
  Button,
  Divider,
  Grid,
  GridSize,
  Grow,
  IconButton,
  Tooltip,
} from '@material-ui/core';
import { OptionTypeBase, Styles } from 'react-select';
import { Input, Select, DatePicker, SwitchButton, Checkbox } from '../Form';
import { Container, Title, Footer } from './styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * @property *name* = Nome do input, que poderá ser chamado via *HandleForm*
   * @example name: 'hello'
   */
  name: string;
  /**
   * @property *labelPlacement* = Texto para o input.
   * @example labelPlacement: 'foo'
   */
  labelPlacement?: string;
  /**
   * @property *width* = Largura do input.
   * @example width: 100
   */
  width?: number;
  /**
   * @property *label* = Nome por cima do input.
   * @example label: 'Message'
   */
  label?: string;
  /**
   * @property *type* = Tipo do input.
   * @example type: 'select' | 'text' | 'date' | 'switch' | 'checkbox'
   */
  type?: 'text' | 'date' | 'select' | 'switch' | 'checkbox';
  /**
   * @property *options* = Opções do input *Select*.
   * @example options: [{label: 'Hello', value: 1}, ...]
   */
  options?: object[];
  /**
   * @property *messageErrorOnBlue* = Apresenta uma mensagem de erro caso a validação utilizando *Yup* esteja incorreta.
   * @example messageErrorOnBlur: 'O campo deve ser preenchido'
   */
  messageErrorOnBlur?: string;
  /**
   * @deprecated
   * @property *iconError* = Define o ícone caso a validação utilizando *Yup* esteja incorreta.
   * @example iconError: <Icon />
   */
  iconError?: string;
  /**
   * @property *sm* = Tamanho do input para dispositivos maiores que 576px
   * usando de referência tabela de 12 colunas.
   * @example sm: boolean | "auto" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
   */
  sm?: boolean | GridSize;
  /**
   * @property *xl* = Tamanho do input para dispositivos maiores que 1200px
   * usando de referência tabela de 12 colunas.
   * @example xl: boolean | "auto" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
   */
  xl?: boolean | GridSize;
  /**
   * @property *lg* = Tamanho do input para dispositivos maiores que 992px
   * usando de referência tabela de 12 colunas.
   * @example lg: boolean | "auto" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
   */
  lg?: boolean | GridSize;
  /**
   * @property *xs* = Tamanho do input para dispositivos menores que 576px
   * usando de referência tabela de 12 colunas.
   * @example xs: boolean | "auto" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
   */
  xs?: boolean | GridSize;
  /**
   * @property *xs* = Tamanho do input para dispositivos maiores que 768px
   * usando de referência tabela de 12 colunas.
   * @example xs: boolean | "auto" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
   */
  md?: boolean | GridSize;
  /**
   * @property *isRequired* = Habilita marcação vermelha de input requerido.
   * @example isRequired: true
   * @description Pode passar também um estado para alternância.
   * @example isRequired: required[true | false]
   */
  isRequired?: boolean;
  /**
   * @property *display* = Habilita | Desabilita o input.
   * @example display: true
   * @description Pode passar também um estado para alternância.
   * @example display: display[true | false]
   */
  display?: boolean;
  /**
   * @property *isLoading* = Habilita um loading no input.
   * @example isLoading: true
   * @description Pode passar também um estado para alternância.
   * @example isLoading: loading[true | false]
   */
  isLoading?: boolean | undefined;
  /**
   * @property *isDisabled* = Desabilita o foco no input, deixando inutilizável.
   * @example isDisabled: true
   * @description Pode passar também um estado para alternância.
   * @example isDisabled: disabled[true | false]
   * @description Este parâmetro pode ser usando em conjunto com o isLoading.
   */
  isDisabled?: boolean | undefined;
  /**
   * @property *style* = Pode atribuir mais estilos ao progressBar.
   * @example style={{filter: 'blur(10px)'}}
   */
  styles?: Partial<Styles<OptionTypeBase, false>>;
  /**
   * @property *onClickEvent* = Evento adicional de click do tipo checkbox.
   * @example onClickEvent: () => {...}
   */
  onClickEvent?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  /**
   * @property *labelCheckbox* = Nome por ao lado do checkbox.
   * @example labelCheckbox: 'Checked'
   */
  labelCheckbox?: string;
    onChangeEvent?(value: number | null): void;

  isMulti?: boolean;
}

export interface HiddenInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * @property *name* = Nome do input, que poderá ser chamado via *HandleForm*
   * @example name: 'hello'
   */
  name: string;
  /**
   * @property *labelPlacement* = Texto para o input.
   * @example labelPlacement: 'foo'
   */
  labelPlacement?: string;
  /**
   * @property *width* = Largura do input.
   * @example width: 100
   */
  width?: number;
  /**
   * @property *label* = Nome por cima do input.
   * @example label: 'Message'
   */
  label?: string;
  /**
   * @property *type* = Tipo do input.
   * @example type: 'select' | 'text' | 'date' | 'switch' | 'checkbox'
   */
  type?: 'text' | 'date' | 'select' | 'switch' | 'checkbox';
  /**
   * @property *options* = Opções do input *Select*.
   * @example options: [{label: 'Hello', value: 1}, ...]
   */
  options?: object[];
  /**
   * @property *messageErrorOnBlue* = Apresenta uma mensagem de erro caso a validação utilizando *Yup* esteja incorreta.
   * @example messageErrorOnBlur: 'O campo deve ser preenchido'
   */
  messageErrorOnBlur?: string;
  /**
   * @deprecated
   * @property *iconError* = Define o ícone caso a validação utilizando *Yup* esteja incorreta.
   * @example iconError: <Icon />
   */
  iconError?: string;
  /**
   * @property *sm* = Tamanho do input para dispositivos maiores que 576px
   * usando de referência tabela de 12 colunas.
   * @example sm: boolean | "auto" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
   */
  sm?: boolean | GridSize;
  /**
   * @property *xl* = Tamanho do input para dispositivos maiores que 1200px
   * usando de referência tabela de 12 colunas.
   * @example xl: boolean | "auto" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
   */
  xl?: boolean | GridSize;
  /**
   * @property *lg* = Tamanho do input para dispositivos maiores que 992px
   * usando de referência tabela de 12 colunas.
   * @example lg: boolean | "auto" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
   */
  lg?: boolean | GridSize;
  /**
   * @property *xs* = Tamanho do input para dispositivos menores que 576px
   * usando de referência tabela de 12 colunas.
   * @example xs: boolean | "auto" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
   */
  xs?: boolean | GridSize;
  /**
   * @property *xs* = Tamanho do input para dispositivos maiores que 768px
   * usando de referência tabela de 12 colunas.
   * @example xs: boolean | "auto" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
   */
  md?: boolean | GridSize;
  /**
   * @property *isRequired* = Habilita marcação vermelha de input requerido.
   * @example isRequired: true
   * @description Pode passar também um estado para alternância.
   * @example isRequired: required[true | false]
   */
  isRequired?: boolean;
  /**
   * @property *display* = Habilita | Desabilita o input.
   * @example display: true
   * @description Pode passar também um estado para alternância.
   * @example display: display[true | false]
   */
  display?: boolean;
  /**
   * @property *isLoading* = Habilita um loading no input.
   * @example isLoading: true
   * @description Pode passar também um estado para alternância.
   * @example isLoading: loading[true | false]
   */
  isLoading?: boolean | undefined;
  /**
   * @property *isDisabled* = Desabilita o foco no input, deixando inutilizável.
   * @example isDisabled: true
   * @description Pode passar também um estado para alternância.
   * @example isDisabled: disabled[true | false]
   * @description Este parâmetro pode ser usando em conjunto com o isLoading.
   */
  isDisabled?: boolean | undefined;
  /**
   * @property *style* = Pode atribuir mais estilos ao progressBar.
   * @example style={{filter: 'blur(10px)'}}
   */
  styles?: Partial<Styles<OptionTypeBase, false>>;
  /**
   * @property *onClickEvent* = Evento adicional de click do tipo checkbox.
   * @example onClickEvent: () => {...}
   */
  onClickEvent?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  /**
   * @property *labelCheckbox* = Nome por ao lado do checkbox.
   * @example labelCheckbox: 'Checked'
   */
  labelCheckbox?: string;
    onChangeEvent?(value: number | null): void;

  isMulti?: boolean;
}

interface SearchBoxProps {
  /**
   * @property *inputs* = Inputs de dentro do Search seguindo a interface InputsProps.
   * @example inputs={[... {name: 'input1', ...}]}
   */
  inputs: InputProps[];
  /**
   * @property *hiddenInputs* = Inputs de dentro do `AdvancedSearch` seguindo a interface InputsProps.
   * @example hiddenInputs={[... {name: 'input1', ...}]}
   */
  hiddenInputs?: HiddenInputProps[];
  /**
   * @property *buttons* = Habilita os botões no search.
   * @example buttons={true}
   */
  buttons?: boolean;
  /**
   * @property *advancedSearch* = Habilita os filtros avançados, criando um botão quer exibirá um modal com os *`hiddenInputs`*.
   * @example advancedSearch={true}
   */
  advancedSearch?: boolean;
  /**
   * @property *importButton* = Habilita o botão de importar arquivos.
   * @example importButton={true}
   */
  importButton?(): void;
  /**
   * @property *createButton* = Habilita o botão de criar.
   * @example createButton={true}
   */
  createButton?(): void;
  /**
   * @property *searchBoxRef* = Referência dos inputs do Search utilizando {@link https://unform.dev/|unform}.
   * @example searchBoxRef={ref}
   */
  searchBoxRef?: React.RefObject<FormHandles>;
  /**
   * @property *titleButtonOnCreate* = Designa um título para o botão *`create`*.
   * @example titleButtonOnCreate="Criar Perfil"
   */
  titleButtonOnCreate?: string;
  /**
   * @property *handleSubmit* = Ação do botão *`submit`*, necessário passar *`data`*.
   * @example handleSubmit={submitFunction}
   */
  handleSubmit?(data: object): void;
  handleAdd?(data: object): void;
  /**
   * @property *handleSubmitWithCancel* = Ação do botão *`cancel`*, necessário passar *`data`*.
   * @example handleSubmitWithCancel={cancelFunction}
   */
  handleSubmitWithCancel?(data: object): void;
  /**
   * @property *submitButton* = Desabilita o botão *`submit`*.
   * @example submitButton={true}
   */
  submitButton?: boolean;
  /**
   * @property *handleCreate* = Ação do botão *`salvar`* ou *`criar`* dentro do Search.
   * @example handleCreate={createFunction}
   */
  handleCreate?(data: object): void;
  /**
   * @property *hiddenChildren* = Permite criar inputs dentro de *`Filtros Avançados`*.
   * @example hiddenChildren={() => (...)}
   */
  hiddenChildren?(): void;
  /**
   * @property *cancelSubmit* = Habilita o botão de cancelar.
   * @example cancelSubmit={true}
   */
  cancelSubmit?: boolean;
  /**
   * @property *children* = Poderá criar React.Components.
   */
  children?: React.ReactNode;
  /**
   * @property *rightChildren* = Poderá criar React.Components ao na barra de título do search.
   * @example rightChildren={() => React.ReactNode}
   */
  rightChildren?(): void;
  addButton?: boolean;
  moreTitle?: string;
  title?: string;
  titleSubmitButton?: string;
  returnButton?: boolean;
  clickOnReturn?(data: object): void; 
  new_buttons?: {
    title: string;
    style: 'secundaryButton' | 'primaryButton';
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  }[];
  autoResponsive?: boolean;
}

/**
 * Componente Search.
 * Cada propriedade age de um determinado modo e algumas propriedades podem depender de outras.
 * @param {data} handleSubmit Ação do botão *`submit`*, necessário passar *`data`*.
 * @param {boolean=} buttons Habilita os botões no search.
 * @param {boolean=} advancedSearch Habilita os filtros avançados, criando um botão quer exibirá um modal com os *`hiddenInputs`*.
 * @param importButton Habilita o botão de importar arquivos.
 * @param {data} handleCreate Ação do botão *`salvar`* ou *`criar`* dentro do Search.
 * @param {boolean=} submitButton Desabilita o botão *`submit`*.
 * @param {refObject} searchBoxRef Referência dos inputs do Search utilizando {@link https://unform.dev/|unform}.
 * @param {data} createButton Habilita o botão de criar.
 * @param {data} handleSubmitWithCancel Ação do botão *`cancel`*, necessário passar *`data`*.
 * @param {string=} titleButtonOnCreate Designa um título para o botão *`create`*.
 * @param children Poderá criar React.Components.
 * @param {InputProps} hiddenChildren Permite criar inputs dentro de *`Filtros Avançados`*.
 * @param {InputProps} hiddenInputs Permite criar inputs dentro de *`Filtros Avançados`*.
 * @param {InputProps} inputs Cria inputs a partir de um JSON no formato da interface InputProps.
 * @param {boolean=} cancelSubmit Habilita o botão de cancelar.
 * @param rightChildren Poderá criar React.Components ao na barra de título do search.
 */

const SearchBox: React.FC<SearchBoxProps> = ({
  inputs,
  hiddenInputs,
  advancedSearch = false,
  buttons = true,
  importButton,
  searchBoxRef,
  submitButton = false,
  handleSubmit,
  handleSubmitWithCancel,
  cancelSubmit = false,
  createButton,
  titleButtonOnCreate,
  children,
  hiddenChildren,
  rightChildren,
  addButton,
  handleAdd,
  moreTitle,
  returnButton,
  clickOnReturn,
  title,
  titleSubmitButton,
  new_buttons,
  autoResponsive = false,
}) => {
  const ownRef = useRef<FormHandles>(null);
  const formRef = searchBoxRef || ownRef;
  const [visible, setVisible] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  const autoXs = (length: number): (boolean | GridSize | undefined) => {
    switch (length) {
      case 1:
        return 12;
      case 2:
        return 6;
      case 3:
        return 6;
      case 4:
        return 12;
    }
  }

  const autoMd = (length: number): (boolean | GridSize | undefined) => {
    switch (length) {
      case 1:
        return 12;
      case 2:
        return 6;
      case 3:
        return 4;
      case 4:
        return 6;
    }
  }

  const autoSm = (length: number): (boolean | GridSize | undefined) => {
    switch (length) {
      case 1:
        return 12;
      case 2:
        return 12;
      case 3:
        return 12;
      case 4:
        return 12;
    }
  }

  const handleClickOutside = (e: any) => {
    if (filterRef?.current?.contains(e.target)) {
      return;
    }

    setVisible(false);
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleInputError = useCallback(
    ({ inputName, message }) => {
      if (formRef) {
        formRef.current?.setFieldError(inputName, message);
      }
    },
    [formRef]
  );

  const clearInputs = useCallback(
    data => {
      if (handleSubmitWithCancel) {
        handleSubmitWithCancel(data);
        inputs.map(input => formRef.current?.setFieldValue(input.name, ''));
        hiddenInputs?.map(input =>
          formRef.current?.setFieldValue(input.name, '')
        );
      } else {
        inputs.map(input => formRef.current?.setFieldValue(input.name, ''));
        hiddenInputs?.map(input =>
          formRef.current?.setFieldValue(input.name, '')
        );
      }
    },
    [inputs, formRef, hiddenInputs, handleSubmitWithCancel]
  );

  const onSubmit = useCallback(
    data => {
      if (handleSubmit) {
        handleSubmit(data);
      }
    },
    [handleSubmit]
  );

  const onSubmitAdd = useCallback(
    data => {
      if (handleAdd) {
        handleAdd(data);
      }
    },
    [handleAdd]
  );

    const handleTraceBack = useCallback(
      (data) => {
        if (clickOnReturn) {
          clickOnReturn(data);
        }
      },
      [clickOnReturn]
    );

  const openModal = useCallback(() => {
    if (createButton) {
      createButton();
    }
  }, [createButton]);

  const openModalImport = useCallback(() => {
    if (importButton) {
      importButton();
    }
  }, [importButton]);

  // const closeClick = () => {
  //   const el = document.getElementById('filterBox');
  //   if (el?.classList.contains('active')) {
  //     el.classList.remove('active');
  //   }
  // };

  return (
    <Container className="containerSearch" ref={formRef} onSubmit={onSubmit}>
      <Title
        className="searchTitle"
        padding={advancedSearch && titleButtonOnCreate ? "1.3rem" : "1.3rem"}
      >
        {returnButton && (
          <div className="returnClick">
            <IconButton
              style={{ padding: "8px" }}
              onClick={handleTraceBack}
              aria-label="Voltar"
              className="returnButton"
            >
              <KeyboardBackspaceRoundedIcon color="disabled" />
            </IconButton>
            <h1>
              {title ? title : "Pesquisar"} {moreTitle ? moreTitle : null}
            </h1>
          </div>
        )}

        {!returnButton && (
          <h1>
            {title ? title : "Pesquisar"} {moreTitle ? moreTitle : null}
          </h1>
        )}

        <div className="containerFilter">
          {rightChildren && rightChildren()}
          {buttons && createButton && (
            <Button
              className="secundaryButton filter-Btn-Create"
              variant="contained"
              style={{ whiteSpace: "nowrap" }}
              onClick={openModal}
            >
              {!!titleButtonOnCreate && titleButtonOnCreate}
            </Button>
          )}
          {advancedSearch && (
            <div className="filter-row" ref={filterRef}>
              <div className="advancedContent">
                <p>Pesquisa Avançada:</p>
                <Tooltip title="Busca avançada" className="filter-Btn-Create">
                  <IconButton
                    className="primaryButton filter filter-id filterBtn"
                    style={{ padding: "8px" }}
                    onClick={() => setVisible(!visible)}
                    aria-label="Filtro"
                  >
                    <FilterListRoundedIcon
                      className="filter-id"
                      color="inherit"
                    />
                  </IconButton>
                </Tooltip>
              </div>

              <Grow in={visible}>
                <div id="filterBox" className="filter-box">
                  <div className="filter-header">
                    <h1>Pesquisa Avançada</h1>
                  </div>
                  <Grid
                    style={{ padding: "1.5rem 1rem", alignItems: "self-end" }}
                    container
                    spacing={3}
                    className="filter-content"
                  >
                    {hiddenInputs?.map(
                      ({
                        name,
                        label,
                        type = "text",
                        options,
                        placeholder,
                        sm,
                        xl,
                        lg,
                        xs,
                        md,
                        isRequired,
                        isLoading,
                        isDisabled,
                        styles,
                        onClickEvent,
                        labelCheckbox,
                        onChangeEvent,
                        isMulti,
                        ...rest
                      }) => (
                        <Grid
                          item
                          xl={xl}
                          lg={lg}
                          xs={xs}
                          md={md}
                          sm={sm}
                          key={name.toString()}
                        >
                          {!!label && isRequired ? (
                            <Badge badgeContent="*">
                              <p className="labelInput">{label}</p>
                            </Badge>
                          ) : (
                            <p className="labelInput">{label}</p>
                          )}
                          {type === "select" && (
                            <Select
                              name={name}
                              key={name.toString()}
                              options={options}
                              placeholder={placeholder}
                              handleInputError={handleInputError}
                              isLoading={isLoading}
                              isDisabled={isDisabled}
                              styles={styles}
                              onChangeEvent={onChangeEvent}
                              // @ts-ignore
                              isMulti={isMulti}
                            />
                          )}
                          {type === "text" && (
                            // @ts-ignore
                            <Input
                              id={name}
                              name={name}
                              key={name.toString()}
                              type={type || "text"}
                              isDisabled={isDisabled}
                              placeholder={placeholder}
                              handleInputError={handleInputError}
                              // iconError={IconError}
                              // iconSuccess={IconSuccess}
                              {...rest}
                            />
                          )}
                          {type === "date" && (
                            <DatePicker
                              id={name}
                              name={name}
                              type="date"
                              key={name.toString()}
                              isDisabled={isDisabled}
                              placeholder={placeholder}
                              handleInputError={handleInputError}
                              {...rest}
                            />
                          )}
                          {type === "switch" && (
                            <SwitchButton
                              id={name}
                              name={name}
                              key={name.toString()}
                              type="checkbox"
                              placeholder={placeholder}
                              {...rest}
                            />
                          )}
                          {type === "checkbox" && (
                            <Checkbox
                              id={name}
                              name={name}
                              type="checkbox"
                              key={name.toString()}
                              label={labelCheckbox}
                              placeholder={placeholder}
                              onClickEvent={onClickEvent}
                              {...rest}
                            />
                          )}
                        </Grid>
                      )
                    )}
                    {hiddenChildren && hiddenChildren()}
                  </Grid>
                </div>
              </Grow>
            </div>
          )}
        </div>
      </Title>
      <Divider className="dividerSearch" style={{ background: "#E1E1E1" }} />
      <Grid
        style={{ padding: "1.5rem 1rem", alignItems: "self-end" }}
        container
        spacing={3}
      >
        {autoResponsive !== true ? (
          <>
        {inputs.map(
          ({
            name,
            label,
            type = "text",
            options,
            placeholder,
            sm,
            xl,
            lg,
            xs,
            md,
            isRequired,
            isLoading,
            isDisabled,
            styles,
            onClickEvent,
            labelCheckbox,
            onChangeEvent,
            display,
            isMulti,
            ...rest
          }) => (
            <>
            {display ? null : (
              <Grid
              item
              xl={xl}
              lg={lg}
              xs={xs}
              md={md}
              sm={sm}
              key={name.toString()}
            >
              {!!label && isRequired ? (
                <Badge badgeContent="*">
                  <p className="labelInput">{label}</p>
                </Badge>
              ) : (
                <p className="labelInput">{label}</p>
              )}
              {type === "select" && (
                <Select
                  name={name}
                  key={name.toString()}
                  options={options}
                  placeholder={placeholder}
                  handleInputError={handleInputError}
                  isLoading={isLoading}
                  isDisabled={isDisabled}
                  styles={styles}
                  onChangeEvent={onChangeEvent}
                  // @ts-ignore
                  isMulti={isMulti}
                />
              )}
              {type === "date" && (
                // @ts-ignore
                <DatePicker
                  id={name}
                  key={name.toString()}
                  name={name}
                  {...rest}
                  type="date"
                  isDisabled={isDisabled}
                  placeholder={placeholder}
                />
              )}
              {type === "text" && (
                // @ts-ignore
                <Input
                  id={name}
                  key={name.toString()}
                  name={name}
                  type={type || "text"}
                  placeholder={placeholder}
                  handleInputError={handleInputError}
                  isDisabled={isDisabled}
                  // iconError={IconError}
                  // iconSuccess={IconSuccess}
                  {...rest}
                />
              )}
              {type === "switch" && (
                <SwitchButton
                  id={name}
                  name={name}
                  key={name.toString()}
                  type="checkbox"
                  placeholder={placeholder}
                  {...rest}
                />
              )}
              {type === "checkbox" && (
                <Checkbox
                  id={name}
                  name={name}
                  key={name.toString()}
                  type="checkbox"
                  label={labelCheckbox}
                  placeholder={placeholder}
                  onClickEvent={onClickEvent}
                  {...rest}
                />
              )}
            </Grid>
            )}
            </>
          )
        )}
        {children}
        </>
        ) : (
          <>
          {inputs.map(
            ({
              name,
              label,
              type = "text",
              options,
              placeholder,
              sm,
              xl,
              lg,
              xs,
              md,
              isRequired,
              isLoading,
              isDisabled,
              styles,
              onClickEvent,
              labelCheckbox,
              onChangeEvent,
              isMulti,
              display,
              ...rest
            }) => (
              <>
              {display ? null : (
                  <Grid
                  item
                  xl={inputs.length >= 1 && inputs.length <= 4 ? true : undefined}
                  lg={inputs.length >= 1 && inputs.length <= 4 ? true : undefined}
                  xs={autoXs(inputs.length)}
                  md={autoMd(inputs.length)}
                  sm={autoSm(inputs.length)}
                  key={name.toString()}
                >
                  {!!label && isRequired ? (
                    <Badge badgeContent="*">
                      <p className="labelInput">{label}</p>
                    </Badge>
                  ) : (
                    <p className="labelInput">{label}</p>
                  )}
                  {type === "select" && (
                    <Select
                      name={name}
                      options={options}
                      placeholder={placeholder}
                      handleInputError={handleInputError}
                      isLoading={isLoading}
                      isDisabled={isDisabled}
                      styles={styles}
                      key={name.toString()}
                      onChangeEvent={onChangeEvent}
                      // @ts-ignore
                      isMulti={isMulti}
                    />
                  )}
                  {type === "date" && (
                    // @ts-ignore
                    <DatePicker
                      id={name}
                      key={name.toString()}
                      name={name}
                      {...rest}
                      type="date"
                      isDisabled={isDisabled}
                      placeholder={placeholder}
                    />
                  )}
                  {type === "text" && (
                    // @ts-ignore
                    <Input
                      id={name}
                      name={name}
                      key={name.toString()}
                      type={type || "text"}
                      placeholder={placeholder}
                      handleInputError={handleInputError}
                      isDisabled={isDisabled}
                      // iconError={IconError}
                      // iconSuccess={IconSuccess}
                      {...rest}
                    />
                  )}
                  {type === "switch" && (
                    <SwitchButton
                      id={name}
                      key={name.toString()}
                      name={name}
                      type="checkbox"
                      placeholder={placeholder}
                      {...rest}
                    />
                  )}
                  {type === "checkbox" && (
                    <Checkbox
                      id={name}
                      name={name}
                      type="checkbox"
                      label={labelCheckbox}
                      placeholder={placeholder}
                      key={name.toString()}
                      onClickEvent={onClickEvent}
                      {...rest}
                    />
                  )}
                </Grid>
              )}
              </>
            )
          )}
          {children}

          </>
        )}
      </Grid>
      {buttons && (
        <>
          <Divider
            className="dividerSearch"
            style={{ background: "#E1E1E1" }}
          />
          <Footer className="containerFooter">
            {/* <Button
              className="primaryButton buttonFooter"
              onClick={clearInputs}
              type="button"
              variant="contained"
            >
              Limpar
            </Button> */}
            {new_buttons &&
              new_buttons.map((btn) => (
                <Button
                  type="button"
                  variant="contained"
                  className={`${btn.style ? btn.style : 'secundaryButton'} buttonFooter`}
                  onClick={btn.onClick}
                >
                  {btn.title}
                </Button>
              ))}
            {importButton && (
              <Button
                type="button"
                variant="contained"
                style={{ background: "#c8c8c8" }}
                className="secundaryButton buttonFooter"
                onClick={openModalImport}
              >
                importar
              </Button>
            )}

            {addButton && (
              <Button
                className="secundaryButton buttonFooter"
                type="button"
                variant="contained"
                onClick={onSubmitAdd}
                style={
                  submitButton
                    ? { visibility: "hidden" }
                    : { visibility: "visible" }
                }
              >
                Adicionar
              </Button>
            )}

            <Button
              className="primaryButton buttonFooter"
              type="submit"
              variant="contained"
              style={
                submitButton
                  ? { visibility: "hidden" }
                  : { visibility: "visible" }
              }
            >
              {titleSubmitButton ? titleSubmitButton : "Pesquisar"}
            </Button>
            {cancelSubmit && (
              <Button
                className="primaryButton buttonFooter"
                onClick={clearInputs}
                type="button"
                variant="contained"
              >
                Cancelar
              </Button>
            )}
          </Footer>
        </>
      )}
    </Container>
  );
};

export default SearchBox;
