import { Box, Container, Flex, Heading } from '@radix-ui/themes';
import Link from 'next/link';
import { BsFillSunFill } from 'react-icons/bs';
import { BiSolidMoon } from 'react-icons/bi';
import { IHeader } from './types';
import { useRecoilState } from 'recoil';
import themeState from '@recoil/theme/atom';

const Header: React.FC<IHeader> = ({ className }) => {
  const [theme, setTheme] = useRecoilState(themeState);

  const handleClickTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <header className={className}>
      <Container size="2">
        <Flex justify="between" align="center">
          <Link href="/" className="link__heading">
            <Heading as="h1">영문주소 변환</Heading>
          </Link>

          <Box width="7" height="7">
            <Flex
              className="mode__icons"
              justify="center"
              align="center"
              height="7"
            >
              <button onClick={handleClickTheme}>
                {theme === 'light' && <BsFillSunFill />}
                {theme === 'dark' && <BiSolidMoon />}
              </button>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </header>
  );
};

export default Header;
