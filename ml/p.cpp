#include<irrlicht/irrlicht.h>
void pk()
{
	irr::IrrlichtDevice *pd=irr::createDevice(irr::video::EDT_OPENGL,irr::core::dimension2du(640,480),16,false);
	auto d=pd->getSceneManager();
	auto b=d->addCubeSceneNode();
	b->setMaterialFlag(irr::video::EMF_LIGHTING,false);
	auto n=d->addCameraSceneNodeFPS(0,100,.3,0,0,0,true,3);
	n->setPosition(irr::core::vector3df(0,0,100));
	n->setTarget(irr::core::vector3df(0,0,0));
	auto k=pd->getVideoDriver();
	auto p=pd->getGUIEnvironment();
	irr::scene::ITriangleSelector* c;
	c=d->createTriangleSelector(b->getMesh(),b);
	b->setTriangleSelector(c);
	auto g=d->createCollisionResponseAnimator(c,n);
	n->addAnimator(g);
	g->drop();

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
