import { useEffect, useState } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import Input from '../components/form-elements/input';
import Select from '../components/form-elements/select';
import Button from '../components/form-elements/button';
import Header from '../components/form-components/Header';
// import ABI from '../contracts/register.json';
import { usePrepareContractWrite, useContractWrite, useWaitForTransaction } from 'wagmi';
import { useToast } from '@chakra-ui/react';

const Register: NextPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  const toast = useToast();

  const roles = [
    { name: 'Manufacturer', value: 'manufacturer' },
    { name: 'Distributor', value: 'distributor' },
  ];

  const { config } = usePrepareContractWrite({
    address: '0x964FbdE535FAE9a539448Ffd7223c38CDe860aa2',
    abi: [
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_role",
            "type": "string"
          }
        ],
        "name": "addUser",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "users",
        "outputs": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "role",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ],
    functionName: 'addUser',
    args: [name, role],
  });

  const { data, write } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });
  useEffect(() => {
    console.log('useEffect called');
    if (isSuccess) {
      toast({
        title: "User Registered",
        description: "User has been registered successfully",
        status: "success",
        duration: 8000,
        isClosable: true,
      });
      setName('');
      setEmail('');
      setRole('0');
    }
  }, [isSuccess]);

  const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = event.target.selectedIndex;
    const selectedOption = event.target.options[selectedIndex];
    const value = selectedOption.value;
    setRole(value);
  };

  return (
    <>
      <Head>
        <title>Register</title>
        <meta name="description" content="LogChain - Register" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-4 md:px-0 mx-auto max-w-1080px">
        <div className="max-w-7xl mt-5 pt-5 pb-5 mx-auto text-center">
          <Header heading="Register" />
          <div className="w-full my-10">
            <div className="rounded-lg shadow-lg backdrop-blur-lg bg-white/30 bg-opacity-40 dark:bg-gray-700/40">
              <div className="p-6">
                <form className="space-y-6 text-gray-900">
                  <Input
                    id="name"
                    name="name"
                    label="Name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <Select
                    id="roles"
                    name="roles"
                    label="Roles"
                    placeholder="Select role"
                    options={roles}
                    value={role}
                    onChange={handleRoleChange}
                    {...(role && { value: role })}
                  />
                  <Button label="Register" onClick={() => {
                    write?.();
                  }} />
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Register;