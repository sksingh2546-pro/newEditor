import React, { Component } from 'react';
import { Button, Menu, Tooltip, Modal } from 'antd';
import PropTypes from 'prop-types';
import i18n from 'i18next';

import { Flex } from '../components/flex';
import { ShortcutHelp } from '../components/help';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhotoVideo,faGem,faImage,faSurprise ,faFileUpload,faListOl,faRocket,faEye,faWindowClose} from '@fortawesome/free-solid-svg-icons'


class Title extends Component {
	static propTypes = {
		currentMenu: PropTypes.string,
		onChangeMenu: PropTypes.func,
	};

	state = {
		visible: false,
	};

	componentDidMount() {
		if (window) {
			(window.adsbygoogle = window.adsbygoogle || []).push({});
		}
	}



	render() {
		const { visible } = this.state;
		return (
			<Flex
				style={{ background: 'linear-gradient(141deg,#23303e,#404040 51%,#23303e 75%)' }}
				flexWrap="wrap"
				flex="1"
				alignItems="center"
			>
				<Flex  flex="0 1 auto" style={{marginLeft:"5px"}}>
                    <Menu
                        mode="horizontal"
                        theme="dark"
                        style={{ background: 'Red', fontSize: '16px' }}
                        onClick={this.props.onChangeMenu}
                        selectedKeys={[this.props.current]}

                    >
                        <Menu.Item  style={{ color: '#fff' }}>
                            <FontAwesomeIcon icon={faWindowClose} />
                        </Menu.Item>
                    </Menu>
				</Flex>
				<Flex style={{ textAlign: "center" ,width:"75%",justifyContent:"center"}}>
					<Menu
						mode="horizontal"
						theme="dark"
						style={{ background: 'transparent', fontSize: '16px' }}
						onClick={this.props.onChangeMenu}
						selectedKeys={[this.props.current]}
					>
						<Menu.Item  style={{ color: '#fff' }}>
                            <FontAwesomeIcon icon={faPhotoVideo} /> Assets
						</Menu.Item>
						<Menu.Item  style={{ color: '#fff' }}>
                            <FontAwesomeIcon icon={faImage} />  Unsplash
						</Menu.Item>

                        <Menu.Item  style={{ color: '#fff' }}>
                            <FontAwesomeIcon icon={faSurprise}/> Giphy
                        </Menu.Item>
				        <Menu.Item  style={{ color: '#fff' }}>
                            <FontAwesomeIcon icon={faFileUpload}/> Pixabay
                        </Menu.Item>
					 <Menu.Item  style={{ color: '#fff' }}>
                         <FontAwesomeIcon icon={faListOl}/>  Playlist
                        </Menu.Item>

                        <Menu.Item  style={{ color: '#fff' }}>
                            <FontAwesomeIcon icon={faGem}/> Plugin
                        </Menu.Item>
						{/* <Menu.Item key="flow" style={{ color: '#fff' }}>{i18n.t('flow.flow')}</Menu.Item> */}
						{/* <Menu.Item key="hexgrid" style={{ color: '#fff' }}>
							{i18n.t('hexgrid.hexgrid')}
						</Menu.Item> */}
					</Menu>
				</Flex>
				<Flex flex="1" justifyContent="flex-end" >
                    <Menu
                        mode="horizontal"
                        theme="dark"
                        style={{ background: 'orange', fontSize: '16px' }}
                        onClick={this.props.onChangeMenu}
                        selectedKeys={[this.props.current]}
                    >

                        <Menu.Item  style={{ color: '#fff' }}>
                            <FontAwesomeIcon icon={faEye}/> Preview
                        </Menu.Item>
                    </Menu>
                    <Menu
                        mode="horizontal"
                        theme="dark"
                        style={{ background: 'green', fontSize: '16px' }}
                        onClick={this.props.onChangeMenu}
                        selectedKeys={[this.props.current]}
                    >

                        <Menu.Item  style={{ color: '#fff' }}>
                            <FontAwesomeIcon icon={faRocket}/> Publish
                        </Menu.Item>
                    </Menu>
				</Flex>
				<Modal
					visible={visible}
					onCancel={() => this.setState({ visible: false })}
					closable
					footer={null}
					width="50%"
				>
					<ShortcutHelp />
				</Modal>
			</Flex>
		);
	}
}

export default Title;
