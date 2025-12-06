#include<irrlicht/irrlicht.h>
void pk()
{
	irr::IrrlichtDevice *pd=irr::createDevice(irr::video::EDT_OPENGL,irr::core::dimension2du(640,480),16,false);
	auto d=pd->getSceneManager();
	auto b=d->addCubeSceneNode();
	b->setMaterialFlag(irr::video::EMF_LIGHTING,false);
	auto n=d->addCameraSceneNodeFPS();
	n->setPosition(irr::core::vector3df(0,0,100));
	n->setTarget(irr::core::vector3df(0,0,0));
	auto k=pd->getVideoDriver();
	auto p=pd->getGUIEnvironment();
	while(pd->run())
	{
		k->beginScene(true,true,0);
		d->drawAll();
		p->drawAll();
		k->endScene();
	}
	pd->drop();
}
int main()
{
	pk();
	return 0;
}
