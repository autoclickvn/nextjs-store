import { Box, Button, Flex, Grid, GridItem, Input } from '@chakra-ui/react';
import axios from 'axios';
import { Formik } from 'formik';
import get from 'lodash/get';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import * as Yup from 'yup';

const Login: NextPage = () => {
  return (
    <Box h="100vh">
      <Head>
        <title>Đăng nhập</title>
      </Head>

      <Grid templateColumns="repeat(2, 1fr)" h="full">
        <GridItem h="full">
          <Flex justify="center" align="center" bgColor="#68c87c" h="full">
            <Image src="/images/login/img-login.png" alt="đăng nhập" width={500} height={500} />
          </Flex>
        </GridItem>

        <GridItem>
          <Box>
            <Formik
              initialValues={{ username: '', password: '' }}
              onSubmit={async (values) => {
                const { username, password } = values;
                axios
                  .post('/api/login', {
                    username,
                    password,
                    // device_id: deviceId,
                  })
                  .then((response) => {
                    const { data, message } = response.data;
                    if (response.status !== 200) {
                      throw new Error(message || 'Login failed');
                    }

                    console.log('ducnh2', response.data);

                    return {
                      success: response.status === 200,
                      message,
                      data: {
                        accessToken: get(data, 'accessToken'),
                        userInfo: get(data, 'userInfo'),
                      },
                    };
                  })
                  .catch((err) => {
                    if (err.message) {
                      throw new Error(err.message);
                    }

                    throw err;
                  });
              }}
              validationSchema={Yup.object().shape({
                username: Yup.string().required('Required'),
                password: Yup.string().required('Required'),
              })}
            >
              {(props) => {
                const { touched, errors, isSubmitting, handleChange, handleBlur, values, handleSubmit } = props;
                return (
                  <form onSubmit={handleSubmit}>
                    <Flex direction="column" align="center" w="50%" mx="auto" mt={20}>
                      <Box w="full">
                        <Box>
                          <label htmlFor="username">Email</label>
                        </Box>
                        <Input
                          id="username"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.username}
                          name="username"
                        />
                        {errors.username && touched.username && <Box>{errors.username}</Box>}
                      </Box>

                      <Box w="full">
                        <Box>
                          <label htmlFor="password">Mật khẩu</label>
                        </Box>
                        <Input
                          id="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                          name="password"
                        />

                        {errors.password && touched.password && <div className="input-feedback">{errors.password}</div>}
                      </Box>
                      <Button mt={5} w="full" colorScheme="green" type="submit" disabled={isSubmitting}>
                        Đăng nhập
                      </Button>
                    </Flex>
                  </form>
                );
              }}
            </Formik>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Login;
