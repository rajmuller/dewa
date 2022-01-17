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
  AspectRatio,
  Heading,
} from "@chakra-ui/react";
import { useTable, useSortBy } from "react-table";

import { getAllContents } from "../../util";
import { ContactType } from "../../types";
import {
  ChevronDownIcon,
  MailIcon,
  TelephoneIcon,
} from "../../components/icons";
import { useCurrentBreakpoint } from "../../hooks";

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
        color="black"
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

  const { isMd, isMobile } = useCurrentBreakpoint();

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

  if (isMobile) {
    return (
      <Flex direction="column" alignSelf="normal" mt={8}>
        {contacts.map((contact) => {
          return (
            <Flex p={4} direction="column" mb={8} shadow="sm">
              <Text fontWeight={500} fontSize="18" mb={2}>
                {contact.nev}
              </Text>
              <Flex mb={1} align="center" justify="start">
                <MailIcon />
                <Text ml={2}>{contact.email}</Text>
              </Flex>

              <Flex align="center" justify="start">
                <TelephoneIcon />
                <Text ml={2}>{contact.telefonszam}</Text>
              </Flex>
            </Flex>
          );
        })}
      </Flex>
    );
  }

  return (
    <Table {...getTableProps()}>
      <Thead>
        {headerGroups.map((headerGroup) => (
          <Tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => {
              return (
                <Th
                  display={
                    isMd && isMobile && column.id === "department"
                      ? "none"
                      : "th"
                  }
                  key={headerGroup}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  isNumeric={column.isNumeric}
                >
                  {getIcon(column.id)}
                  {column.render("Header")}
                  <>
                    {/* eslint-disable-next-line no-nested-ternary */}
                    {column.isSorted ? (
                      //  @ts-ignore
                      column.isSortedDesc ? (
                        <chakra.span pl="4">
                          <ChevronDownIcon aria-label="sorted descending" />
                        </chakra.span>
                      ) : (
                        <chakra.span pl="4">
                          <ChevronDownIcon
                            transform="rotate(180deg)"
                            aria-label="sorted ascending"
                          />
                        </chakra.span>
                      )
                    ) : null}
                  </>
                </Th>
              );
            })}
          </Tr>
        ))}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <Tr
              key={row}
              bg={i % 2 === 0 && "primary.100"}
              {...row.getRowProps()}
            >
              {row.cells.map((cell) => {
                return (
                  <Td
                    display={
                      isMd && isMobile && cell.column.id === "department"
                        ? "none"
                        : "td"
                    }
                    {...cell.getCellProps()}
                    // @ts-ignore
                    isNumeric={cell.column.isNumeric}
                  >
                    {cell.render("Cell")}
                  </Td>
                );
              })}
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

  const selectedContacts = contacts.filter(
    (contact) => contact.helyszin === active
  );

  return (
    <Flex direction="column" align="center" mt={12}>
      <HStack w="100%" align="center" justify="center" mb={8}>
        <Option value="budaors" active={active} onClick={onActivation}>
          Budaörs
        </Option>
        <Option value="bekescsaba" active={active} onClick={onActivation}>
          Békéscsaba
        </Option>
      </HStack>
      {/* TODO: bekescsaba kozpont */}
      <ContactList contacts={selectedContacts} />
      <Heading mt={32} mb={6} fontSize={24} fontWeight={400}>
        2040 Budaörs, Gyár u. 2. (Budaörsi Ipari Park)
      </Heading>
      <AspectRatio w="100%" ratio={[1, 1, 31 / 9]}>
        <iframe
          loading="lazy"
          title="Dewa HQ"
          src="https://www.google.com/maps/embed/v1/search?q=dewa%20hungary&key=AIzaSyDGQJAOWTOczUfw4RU9YoRBdpD44Kas81Q"
        />
      </AspectRatio>
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
