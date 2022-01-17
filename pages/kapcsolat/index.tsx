import React, { FC, useState, useCallback, useMemo } from "react";
import { GetStaticProps } from "next";
import {
  Flex,
  HStack,
  Button,
  Text,
  Stack,
  Thead,
  Tr,
  Th,
  Table,
  Tbody,
  Td,
  chakra,
} from "@chakra-ui/react";
import { useTable, useSortBy } from "react-table";

import { useCurrentBreakpoint } from "../../hooks";
import { getAllContents } from "../../util";
import { ContactType } from "../../types";
import {
  ChevronDownIcon,
  MailIcon,
  TelephoneIcon,
} from "../../components/icons";

type ContactProps = {
  contacts: ContactType[];
};

type OptionProps = {
  value: string;
  active: string;
  onClick: (e: any) => void;
};

const Option: FC<OptionProps> = ({ value, active, onClick, children }) => {
  return (
    <Stack spacing={0}>
      <Button
        variant="ghost"
        bg="none"
        border="none"
        borderRadius="none"
        h="32px"
        px={[4, 32, 32]}
        value={value}
        _hover={{
          background: "none",
        }}
        _focus={{
          background: "none",
        }}
        onClick={onClick}
      >
        {children}
      </Button>
      <Flex
        h={1}
        visibility={active === value ? "visible" : "hidden"}
        w="100%"
        bg="secondary.500"
        borderRadius="full"
      />
      <Flex h="2px" w="100%" bg="grey.silver" borderRadius="full" />
    </Stack>
  );
};

const Selection: FC = () => {
  const { isMdMinus } = useCurrentBreakpoint();

  if (isMdMinus) {
    return null;
  }

  return <Flex>SELECTION</Flex>;
};

const getIcon = (id: string) => {
  switch (id) {
    case "telephone":
      return <TelephoneIcon mr={1.5} boxSize={4} color="black" />;
    case "email":
      return <MailIcon mr={1.5} boxSize={4} color="black" />;

    case "asd":
      return <TelephoneIcon mr={1.5} boxSize={4} color="black" />;

    default:
      return null;
  }
};

const ContactList: FC<ContactProps> = ({ contacts }) => {
  contacts.sort((a, b) => {
    if (a.reszleg === "kozpont") {
      if (b.reszleg === "kozpont") {
        return a.nev.localeCompare(b.nev);
      }

      return -1;
    }

    return 0;
  });

  const data = useMemo(
    () =>
      contacts.map(({ nev, reszleg, email, telefonszam }) => ({
        name: nev,
        department: reszleg,
        email,
        telephone: parseInt(telefonszam, 10),
      })),
    [contacts]
  );

  const columns = useMemo(
    () => [
      {
        Header: "Név",
        accessor: "name",
      },
      {
        Header: "Részleg",
        accessor: "department",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Telefon",
        accessor: "telephone",
        isNumeric: true,
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    // @ts-ignore
  } = useTable({ columns, data }, useSortBy);

  return (
    <Table {...getTableProps()}>
      <Thead>
        {headerGroups.map((headerGroup) => (
          <Tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => {
              return (
                <>
                  <Th
                    // @ts-ignore
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    isNumeric={column.isNumeric}
                  >
                    {getIcon(column.id)}
                    {column.render("Header")}
                    <chakra.span pl="4">
                      {/* eslint-disable-next-line no-nested-ternary */}
                      {column.isSorted ? (
                        //  @ts-ignore
                        column.isSortedDesc ? (
                          <ChevronDownIcon aria-label="sorted descending" />
                        ) : (
                          <ChevronDownIcon
                            transform="rotate(180deg)"
                            aria-label="sorted ascending"
                          />
                        )
                      ) : null}
                    </chakra.span>
                  </Th>
                </>
              );
            })}
          </Tr>
        ))}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <Tr bg={i % 2 === 0 && "primary.100"} {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <>
                  <Td
                    {...cell.getCellProps()}
                    // @ts-ignore
                    isNumeric={cell.column.isNumeric}
                  >
                    {cell.render("Cell")}
                  </Td>
                </>
              ))}
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

const Contact: FC<ContactProps> = ({ contacts }) => {
  const [active, setActive] = useState("budaors");

  const onActivation = useCallback((e) => {
    setActive(e.target.value);
  }, []);

  // const selectedContacts = currentContacts ? currentContacts : contacts

  return (
    <Flex direction="column" align="center">
      <HStack w="100%" align="center" justify="center">
        <Option value="budaors" active={active} onClick={onActivation}>
          Budaörs
        </Option>
        <Option value="bekecsaba" active={active} onClick={onActivation}>
          Békéscsaba
        </Option>
      </HStack>
      <Text>GOOGLE MAP</Text>
      <Selection />
      <ContactList contacts={contacts} />
    </Flex>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const contacts = getAllContents("kapcsolat", [
    "nev",
    "slug",
    "reszleg",
    "helyszin",
    "email",
    "telefonszam",
  ]);

  return {
    props: {
      contacts,
    },
  };
};

export default Contact;
